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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCustomUser = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const UserContext_1 = require("./UserContext");
const firebase_1 = require("../firebase");
const firestore_1 = require("firebase/firestore");
const useCustomUser = () => (0, react_1.useContext)(UserContext_1.UserContex);
exports.useCustomUser = useCustomUser;
const UserProvider = ({ children }) => {
    const [user, setUser] = (0, react_1.useState)();
    const [totalBudget, setTotalBudgets] = (0, react_1.useState)([]);
    const [userExpenseData, setUserExpenseData] = (0, react_1.useState)([]);
    const [isLoading, setLoading] = (0, react_1.useState)(true);
    const getUserData = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            firebase_1.auth.onAuthStateChanged((user) => __awaiter(void 0, void 0, void 0, function* () {
                if (user) {
                    const docRef = (0, firestore_1.doc)(firebase_1.db, "users", (user === null || user === void 0 ? void 0 : user.uid) || "");
                    console.log({ docRef });
                    const docSnap = yield (0, firestore_1.getDoc)(docRef);
                    if (docSnap.exists()) {
                        setUser(Object.assign(Object.assign({}, docSnap.data()), { uid: user === null || user === void 0 ? void 0 : user.uid }));
                        setLoading(false);
                    }
                }
                else {
                    setLoading(false);
                }
            }));
        }
        catch (e) {
            setLoading(false);
            console.log(e);
        }
    });
    const getBudgetData = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            let index = 0;
            let temp = [];
            let tempBudgetArray = [];
            const collectionRef = (0, firestore_1.collection)(firebase_1.db, `/users/${user.uid}/budgets`);
            const querySnapshot = yield (0, firestore_1.getDocs)(collectionRef);
            (_a = querySnapshot.docs) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
                var _a, _b, _c;
                tempBudgetArray.push(item === null || item === void 0 ? void 0 : item.id);
                console.log((_a = item.data()) === null || _a === void 0 ? void 0 : _a.budgetValue, "asas");
                temp.push({
                    budgetName: item === null || item === void 0 ? void 0 : item.id,
                    expenses: (_b = item === null || item === void 0 ? void 0 : item.data()) === null || _b === void 0 ? void 0 : _b.expenses,
                    budgetValue: ((_c = item.data()) === null || _c === void 0 ? void 0 : _c.budgetValue) || 0,
                });
            });
            setTotalBudgets(tempBudgetArray);
            setUserExpenseData(temp);
        }
        catch (e) {
            console.log("error>>>", e);
        }
    });
    const updateData = () => {
        getBudgetData();
    };
    (0, react_1.useEffect)(() => {
        getUserData();
    }, []);
    (0, react_1.useEffect)(() => {
        user && getBudgetData();
    }, [user]);
    const value = (0, react_1.useMemo)(() => ({ user, isLoading, totalBudget, userExpenseData, updateData }), [isLoading, user, totalBudget, userExpenseData, updateData]);
    return (0, jsx_runtime_1.jsx)(UserContext_1.UserContex.Provider, { value: value, children: children });
};
exports.default = UserProvider;
