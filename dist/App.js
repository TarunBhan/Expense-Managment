"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
const Layout_1 = __importDefault(require("./Components/Layout/Layout"));
const Login_1 = __importDefault(require("./Components/Auth/Login"));
const react_1 = require("react");
const UserContext_1 = require("./context/UserContext");
const Header_1 = __importDefault(require("./Components/Header/Header"));
const ExpenseDetail_1 = __importDefault(require("./Components/ExpenseDetail/ExpenseDetail"));
function App() {
    const { user, isLoading } = (0, react_1.useContext)(UserContext_1.UserContex);
    (0, react_1.useEffect)(() => {
        console.log("hey", user);
    }, [user]);
    console.log({ isLoading });
    if (isLoading) {
        console.log("render>>");
        return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("text", { children: "Loader" }) }));
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { style: {
                    display: "grid",
                    minHeight: "100vh",
                    gridTemplateRows: "auto 1fr auto",
                    gap: "var(--space-lg)",
                    paddingInline: "18px",
                }, children: [user && (0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { future: { v7_startTransition: true }, children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: user ? "/" : "/auth", element: user ? (0, jsx_runtime_1.jsx)(Layout_1.default, {}) : (0, jsx_runtime_1.jsx)(Login_1.default, {}), index: true }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Layout_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/:path", element: (0, jsx_runtime_1.jsx)(Layout_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/auth", element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/budget/:budgetName?", element: (0, jsx_runtime_1.jsx)(ExpenseDetail_1.default, {}) })] }) })] }), (0, jsx_runtime_1.jsx)("img", { src: "https://codinginpublic.dev/projects/react-router-budget-app/assets/wave-47c58563.svg", style: {
                    width: "100vw",
                    display: "block",
                } })] }));
}
exports.default = App;
