"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = exports.getDetailedExpensesInfo = void 0;
const getDetailedExpensesInfo = (budgets) => {
    var _a;
    let amountLeft = 0;
    let totalExpenses = 0;
    let widthPercentage = "";
    if (((_a = budgets === null || budgets === void 0 ? void 0 : budgets.expenses) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        budgets.expenses.forEach((item) => {
            totalExpenses += item === null || item === void 0 ? void 0 : item.value;
        });
    }
    amountLeft = (budgets === null || budgets === void 0 ? void 0 : budgets.budgetValue) - totalExpenses;
    widthPercentage = `${Math.min((totalExpenses / (budgets === null || budgets === void 0 ? void 0 : budgets.budgetValue)) * 100, 100)}%`;
    return { totalExpenses, amountLeft, widthPercentage };
};
exports.getDetailedExpensesInfo = getDetailedExpensesInfo;
const getRandomNumber = () => {
    return Math.floor(Math.random() * (999 - 100 + 1) + 100);
};
exports.getRandomNumber = getRandomNumber;
