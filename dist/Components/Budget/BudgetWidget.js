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
const Button_1 = __importDefault(require("../Button/Button"));
const baseTheme_1 = __importDefault(require("../Theme/baseTheme"));
const firestore_1 = require("firebase/firestore");
const firebase_1 = require("../../firebase");
const UserContext_1 = require("../../context/UserContext");
const react_hook_form_1 = require("react-hook-form");
const utils_1 = require("../utils");
const BudgetWidget = () => {
    var _a, _b;
    const { user, totalBudget, updateData } = (0, react_1.useContext)(UserContext_1.UserContex);
    const budget = "Coffee";
    const { register, watch, reset, formState: { isValid, errors }, } = (0, react_hook_form_1.useForm)({
        mode: "onChange",
        reValidateMode: "onChange",
    });
    const [data, setData] = (0, react_1.useState)({
        budgetName: "",
        budgetAmount: 0,
    });
    const [loading, setLoading] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const subscription = watch((data) => {
            setData((prev) => (Object.assign(Object.assign({}, prev), data)));
        });
        return () => subscription.unsubscribe();
    }, [watch]);
    const addBudget = () => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        if (totalBudget.find((item) => item === (data === null || data === void 0 ? void 0 : data.budgetName))) {
            setLoading(false);
            return;
        }
        const expenseDocRef = (0, firestore_1.doc)(firebase_1.db, `users/${user === null || user === void 0 ? void 0 : user.uid}/budgets/${data === null || data === void 0 ? void 0 : data.budgetName}`);
        try {
            yield (0, firestore_1.setDoc)(expenseDocRef, {
                budgetValue: Number(data === null || data === void 0 ? void 0 : data.budgetAmount),
            });
            setLoading(false);
            updateData();
            reset();
            // const dataRef = await addDoc(
            //   collection(db, "users/BE4VYqOT0dbyWbtSrZZXdsNH2CZ2/Expenses"),
            //   { data: { budgets: "Hey There", expense: [{ kurkire: 10 }] } }
            // );
        }
        catch (e) {
            console.log(e);
        }
    });
    const handleBudget = () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("render");
        const expenseDocRef = (0, firestore_1.doc)(firebase_1.db, `users/BE4VYqOT0dbyWbtSrZZXdsNH2CZ2/budgets/${data === null || data === void 0 ? void 0 : data.budgetName}`);
        try {
            yield (0, firestore_1.setDoc)(expenseDocRef, {
                expenses: (0, firestore_1.arrayUnion)({
                    name: "Indian Game is",
                    valie: 10,
                    key: (0, utils_1.getRandomNumber)(),
                }),
            }, { merge: true });
            // const dataRef = await addDoc(
            //   collection(db, "users/BE4VYqOT0dbyWbtSrZZXdsNH2CZ2/Expenses"),
            //   { data: { budgets: "Hey There", expense: [{ kurkire: 10 }] } }
            // );
        }
        catch (e) {
            console.log(e);
        }
    });
    //Delete Budget
    //Delete Expense
    const DeleteExpense = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const key = 513;
        const t = [
            {
                budgetName: "Coffee",
                expenses: {
                    budgetValue: 100,
                    expenses: [
                        {
                            name: "Hey Tarun This SIde",
                            valie: 10,
                        },
                        {
                            valie: 10,
                            name: "Hey lklkk This SIde",
                        },
                    ],
                },
            },
            {
                budgetName: "Red",
                data: {
                    expenses: [
                        {
                            valie: 10,
                            key: 513,
                            name: "Hey lklkk This SIde",
                        },
                        {
                            valie: 10,
                            key: 232,
                            name: "Side One",
                        },
                    ],
                    budgetValue: 100,
                },
            },
        ];
        const updatedExpenses = (_b = (_a = t[1].data) === null || _a === void 0 ? void 0 : _a.expenses) === null || _b === void 0 ? void 0 : _b.filter((item) => (item === null || item === void 0 ? void 0 : item.key) !== key);
    });
    //GetBudget
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            display: "flex",
            width: "100%",
            maxWidth: "380px",
            height: "185px",
            borderRadius: "10px",
            justifyContent: "center",
            padding: "10px",
            backgroundColor: "white",
            alignItems: "center",
            boxShadow: "rgba(0, 0, 0, 0.2) -1px -2px 19px 3px",
        }, children: (0, jsx_runtime_1.jsx)("div", { style: {
                border: "1px dashed black",
                display: "flex",
                height: "100%",
                width: "100%",
                flexDirection: "column",
                minWidth: "300px",
                borderRadius: "10px",
            }, children: (0, jsx_runtime_1.jsxs)("form", { style: {
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                }, children: [(0, jsx_runtime_1.jsx)("text", { style: {
                            fontFamily: baseTheme_1.default.fonts.secondary,
                            fontSize: baseTheme_1.default.fontSizes[2],
                        }, children: "Create Budget" }), (0, jsx_runtime_1.jsx)("text", { style: {
                            fontFamily: baseTheme_1.default.fonts.secondary,
                            fontSize: baseTheme_1.default.fontSizes[0],
                            marginBottom: "10px",
                            marginTop: "5px",
                        }, children: "Budget Name" }), (0, jsx_runtime_1.jsx)("input", Object.assign({ type: "text", autoFocus: true, placeholder: "Budget Name", style: {
                            width: "80%",
                            fontSize: baseTheme_1.default.fontSizes[0],
                            height: "20px",
                        } }, register("budgetName", {
                        required: "Please enter Your Budget Name",
                    }))), (0, jsx_runtime_1.jsx)("div", { style: {
                            width: "70%",
                            height: "10px",
                            display: "flex",
                        }, children: (errors === null || errors === void 0 ? void 0 : errors.budgetName) && ((0, jsx_runtime_1.jsx)("text", { style: {
                                fontSize: "8px",
                                fontFamily: baseTheme_1.default.fonts.secondary,
                                fontWeight: baseTheme_1.default.fontWeights[3],
                                color: baseTheme_1.default.colors.red,
                                paddingTop: "2px",
                            }, children: (_a = errors === null || errors === void 0 ? void 0 : errors.budgetName) === null || _a === void 0 ? void 0 : _a.message })) }), (0, jsx_runtime_1.jsx)("text", { style: {
                            fontFamily: baseTheme_1.default.fonts.secondary,
                            fontSize: baseTheme_1.default.fontSizes[0],
                        }, children: "Amount" }), (0, jsx_runtime_1.jsx)("input", Object.assign({ type: "number", required: true, placeholder: "\u20B9250,\u20B920", style: {
                            width: "80%",
                            height: "20px",
                            fontSize: baseTheme_1.default.fontSizes[0],
                        } }, register("budgetAmount", {
                        required: "Please enter BudgetAmount",
                    }))), (0, jsx_runtime_1.jsx)("div", { style: {
                            width: "70%",
                            height: "10px",
                            display: "flex",
                            marginBottom: "5px",
                        }, children: (errors === null || errors === void 0 ? void 0 : errors.budgetAmount) && ((0, jsx_runtime_1.jsx)("text", { style: {
                                fontSize: "8px",
                                fontFamily: baseTheme_1.default.fonts.secondary,
                                fontWeight: baseTheme_1.default.fontWeights[3],
                                color: baseTheme_1.default.colors.red,
                                paddingTop: "2px",
                            }, children: (_b = errors === null || errors === void 0 ? void 0 : errors.budgetAmount) === null || _b === void 0 ? void 0 : _b.message })) }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Create Budget", disable: !isValid, onClick: addBudget, btnHeight: "35px", loading: loading, type: "submit" })] }) }) }));
};
exports.default = BudgetWidget;
