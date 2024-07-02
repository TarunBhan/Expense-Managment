"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const UserContext_1 = require("../../context/UserContext");
const Header = () => {
    const { user } = (0, react_1.useContext)(UserContext_1.UserContex);
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
        }, children: [(0, jsx_runtime_1.jsx)("h1", { children: "Welcome Back " }), (0, jsx_runtime_1.jsx)("h1", { style: {
                    color: "#1bbbc3",
                    textTransform: "capitalize",
                    paddingLeft: "2px",
                }, children: user === null || user === void 0 ? void 0 : user.firstName })] }));
};
exports.default = Header;
