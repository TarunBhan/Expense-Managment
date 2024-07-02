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
const UserContext_1 = require("../../context/UserContext");
const react_hook_form_1 = require("react-hook-form");
const Button_1 = __importDefault(require("../Button/Button"));
const firebase_1 = require("../../firebase");
const firestore_1 = require("firebase/firestore");
const AddExpense = () => {
    const { user, totalBudget, updateData } = (0, react_1.useContext)(UserContext_1.UserContex);
    console.log({ totalBudget });
    const { register, formState: { errors, isValid }, reset, watch, } = (0, react_hook_form_1.useForm)();
    const [isLoading, setIsLoading] = (0, react_1.useState)();
    const [data, setData] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        const subscription = watch((data) => {
            setData((prev) => (Object.assign(Object.assign({}, prev), data)));
        });
        return () => subscription.unsubscribe();
    }, [watch]);
    const handleBudget = () => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        console.log(data === null || data === void 0 ? void 0 : data.expenseAmount);
        const expenseDocRef = (0, firestore_1.doc)(firebase_1.db, `users/${user === null || user === void 0 ? void 0 : user.uid}/budgets/${data === null || data === void 0 ? void 0 : data.budgetName}`);
        try {
            yield (0, firestore_1.setDoc)(expenseDocRef, {
                expenses: (0, firestore_1.arrayUnion)({
                    name: data === null || data === void 0 ? void 0 : data.expenseName,
                    value: Number(data === null || data === void 0 ? void 0 : data.expenseAmount),
                    key: Math.floor(Math.random() * (999 - 100 + 1) + 100),
                }),
            }, { merge: true });
            setIsLoading(false);
            updateData();
            //   reset();
        }
        catch (e) {
            setIsLoading(false);
            console.log(e);
        }
    });
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            display: "flex",
            width: "100%",
            maxWidth: "380px",
            height: "186px",
            borderRadius: "10px",
            justifyContent: "center",
            padding: "10px",
            backgroundColor: "white",
            alignItems: "center",
            boxShadow: "rgba(0, 0, 0, 0.2) -1px -2px 19px 3px",
        }, children: (0, jsx_runtime_1.jsx)("div", { style: {
                border: "1px dashed black",
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "flex-start",
                minWidth: "300px",
                borderRadius: "10px",
            }, children: (0, jsx_runtime_1.jsxs)("form", { style: {
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                }, children: [(0, jsx_runtime_1.jsx)("span", { children: "Add New Expense" }), (0, jsx_runtime_1.jsxs)("div", { style: {
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            height: "100%",
                        }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { width: "50%" }, children: [(0, jsx_runtime_1.jsx)("text", { style: {
                                            fontFamily: baseTheme_1.default.fonts.secondary,
                                            fontSize: baseTheme_1.default.fontSizes[0],
                                            marginBottom: "10px",
                                            marginTop: "5px",
                                        }, children: "Expense Name" }), (0, jsx_runtime_1.jsx)("input", Object.assign({ type: "text", autoFocus: true, required: true, placeholder: "Expense Name", style: {
                                            width: "90%",
                                            fontSize: baseTheme_1.default.fontSizes[0],
                                            height: "20px",
                                        } }, register("expenseName", {
                                        required: "Please enter Your Expense Name",
                                    })))] }), (0, jsx_runtime_1.jsxs)("div", { style: { width: "50%" }, children: [(0, jsx_runtime_1.jsx)("text", { style: {
                                            fontFamily: baseTheme_1.default.fonts.secondary,
                                            fontSize: baseTheme_1.default.fontSizes[0],
                                            marginBottom: "10px",
                                            marginTop: "5px",
                                        }, children: "Amount" }), (0, jsx_runtime_1.jsx)("input", Object.assign({ type: "number", required: true, placeholder: "\u20B9250,\u20B920", style: {
                                            width: "90%",
                                            height: "20px",
                                            fontSize: baseTheme_1.default.fontSizes[0],
                                        } }, register("expenseAmount", {
                                        required: "Please enter Expense Amount",
                                    })))] })] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "20px",
                            flexDirection: "column",
                        }, children: [(0, jsx_runtime_1.jsx)("text", { style: {
                                    fontFamily: baseTheme_1.default.fonts.secondary,
                                    fontSize: baseTheme_1.default.fontSizes[2],
                                    marginTop: "10px",
                                }, children: "Select Budget" }), (0, jsx_runtime_1.jsxs)("select", Object.assign({}, register("budgetName", { required: "select one option" }), { style: { width: "100%", height: "25px" }, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "--Please Select A Budget--" }), totalBudget &&
                                        (totalBudget === null || totalBudget === void 0 ? void 0 : totalBudget.map((item, index) => {
                                            console.log({ item });
                                            return ((0, jsx_runtime_1.jsx)("option", { value: item, children: item }, index));
                                        }))] }))] }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Add Expense", disable: !isValid, onClick: handleBudget, btnHeight: "35px", loading: isLoading, type: "submit" })] }) }) }));
};
exports.default = AddExpense;
