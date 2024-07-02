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
const react_router_dom_1 = require("react-router-dom");
const ExpenseWidget_1 = __importDefault(require("../Budget/ExpenseWidget"));
const react_1 = require("react");
const firestore_1 = require("firebase/firestore");
const firebase_1 = require("../../firebase");
const UserContext_1 = require("../../context/UserContext");
const ExpenseDetailScreen = () => {
    const { budgetName } = (0, react_router_dom_1.useParams)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { user } = (0, react_1.useContext)(UserContext_1.UserContex);
    const [budgetData, setBudgetData] = (0, react_1.useState)();
    if (!budgetName) {
        navigate("/");
        return;
    }
    const getSingleBudgetData = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const docRef = (0, firestore_1.doc)(firebase_1.db, `users/${user === null || user === void 0 ? void 0 : user.uid}/budgets/${budgetName}`);
            console.log({ docRef });
            const docSnap = yield (0, firestore_1.getDoc)(docRef);
            if (docSnap.exists()) {
                setBudgetData(docSnap.data());
            }
        }
        catch (e) {
            console.log(e);
        }
    });
    (0, react_1.useEffect)(() => {
        user && getSingleBudgetData();
    }, [user]);
    console.log(">>>", budgetData);
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            display: "flex",
            zIndex: 9999,
        }, children: budgetData && (0, jsx_runtime_1.jsx)(ExpenseWidget_1.default, { budgetData: budgetData }) }));
};
exports.default = ExpenseDetailScreen;
