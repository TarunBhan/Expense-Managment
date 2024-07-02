"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContex = void 0;
const react_1 = require("react");
exports.UserContex = (0, react_1.createContext)({
    user: null,
    totalBudget: [],
    userExpenseData: undefined,
    isLoading: true,
    updateData: () => { },
});
