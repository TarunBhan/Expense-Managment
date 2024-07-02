"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const baseTheme_1 = __importDefault(require("../Theme/baseTheme"));
const Budget_styles_1 = require("./Budget.styles");
const firestore_1 = require("firebase/firestore");
const firebase_1 = require("../../firebase");
const Button_1 = __importDefault(require("../Button/Button"));
const react_router_dom_1 = require("react-router-dom");
const utils_1 = require("../utils");
const UserContext_1 = require("../../context/UserContext");
const ExpenseWidget = ({ budgetData }) => {
    const { budgetName } = (0, react_router_dom_1.useParams)();
    const { user, updateData } = (0, react_1.useContext)(UserContext_1.UserContex);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const color = baseTheme_1.default.colors.blue;
    const { totalExpenses, amountLeft, widthPercentage } = (0, utils_1.getDetailedExpensesInfo)(budgetData);
    console.log(">>>>>");
    const deleteBudget = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const expenseDocRef = (0, firestore_1.doc)(firebase_1.db, `users/${user === null || user === void 0 ? void 0 : user.uid}/budgets`, `${budgetName || (budgetData === null || budgetData === void 0 ? void 0 : budgetData.budgetName)}`);
            yield (0, firestore_1.deleteDoc)(expenseDocRef);
            updateData();
        }
        catch (e) {
            console.log(e);
        }
    });
    console.log(widthPercentage, budgetData === null || budgetData === void 0 ? void 0 : budgetData.budgetName, ">>>>");
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            width: "100%",
            display: "flex",
            height: "180px",
            borderRadius: "12px",
            maxWidth: "380px",
            boxShadow: "rgba(27,187,195,0.5) -1px -2px 19px 3px",
            padding: "10px",
            justifyContent: "center",
        }, children: (0, jsx_runtime_1.jsxs)("div", { style: {
                border: "1px dashed black",
                padding: "10px",
                width: "100%",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { style: {
                                flexDirection: "row",
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                            }, children: [(0, jsx_runtime_1.jsxs)("text", { style: {
                                        fontSize: baseTheme_1.default.fontSizes[3],
                                        color,
                                    }, children: ["Budget:", `${budgetName || (budgetData === null || budgetData === void 0 ? void 0 : budgetData.budgetName)}`] }), (0, jsx_runtime_1.jsxs)("text", { style: { fontSize: baseTheme_1.default.fontSizes[3], color }, children: ["Total:\u20B9", budgetData === null || budgetData === void 0 ? void 0 : budgetData.budgetValue, " Budget"] })] }), (0, jsx_runtime_1.jsx)("div", { style: {
                                width: "100%",
                                background: baseTheme_1.default.colors.blacks[3],
                                height: "19px",
                                borderRadius: "12px",
                                marginTop: "12px",
                            }, children: (0, jsx_runtime_1.jsx)(Budget_styles_1.ProgressBar, { width: widthPercentage, color: color, animationName: `progressAnimate-${(0, utils_1.getRandomNumber)()}` }) }), (0, jsx_runtime_1.jsxs)("div", { style: {
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginTop: "10px",
                            }, children: [(0, jsx_runtime_1.jsxs)("text", { style: { fontSize: baseTheme_1.default.fontSizes[3], color }, children: ["Spent: \u20B9", totalExpenses] }), (0, jsx_runtime_1.jsxs)("text", { style: { fontSize: baseTheme_1.default.fontSizes[3], color }, children: ["Remaining: \u20B9", amountLeft] })] })] }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: deleteBudget, buttonText: "Delete Budget", btnHeight: "40px" })] }) }));
};
exports.default = ExpenseWidget;
