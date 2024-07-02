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
const BudgetWidget_1 = __importDefault(require("../Budget/BudgetWidget"));
const ExpenseWidget_1 = __importDefault(require("../Budget/ExpenseWidget"));
const firestore_1 = require("firebase/firestore");
const firebase_1 = require("../../firebase");
const AddExpense_1 = __importDefault(require("../Budget/AddExpense"));
const UserContext_1 = require("../../context/UserContext");
const Home = () => {
    const [data, setData] = (0, react_1.useState)([]);
    const { user, userExpenseData } = (0, react_1.useContext)(UserContext_1.UserContex);
    console.log({ userExpenseData });
    const getBudgetData = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            let index = 0;
            let temp = [];
            const collectionRef = (0, firestore_1.collection)(firebase_1.db, `/users/${user === null || user === void 0 ? void 0 : user.uid}/budgets`);
            const querySnapshot = yield (0, firestore_1.getDocs)(collectionRef);
            console.log((_a = querySnapshot.docs) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
                temp.push({
                    budgetName: item === null || item === void 0 ? void 0 : item.id,
                    data: item === null || item === void 0 ? void 0 : item.data(),
                });
            }));
            setData(temp);
        }
        catch (e) {
            console.log("error>>>", e);
        }
    });
    (0, react_1.useEffect)(() => {
        getBudgetData();
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            display: "flex",
            width: "100%",
            gap: "30px",
            justifyContent: "center",
            marginTop: "20px",
            flexWrap: "wrap",
        }, children: [(0, jsx_runtime_1.jsx)(AddExpense_1.default, {}), (0, jsx_runtime_1.jsx)(BudgetWidget_1.default, {}), userExpenseData &&
                (userExpenseData === null || userExpenseData === void 0 ? void 0 : userExpenseData.map((item, index) => {
                    return (0, jsx_runtime_1.jsx)(ExpenseWidget_1.default, { budgetData: item }, index);
                }))] }));
};
exports.default = Home;
