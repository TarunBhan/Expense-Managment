"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Budget_styles_1 = require("../Budget/Budget.styles");
const Button = ({ onClick, buttonText, buttonWidth = "70%", disable = false, loading = false, btnHeight = "35px", type = "button", }) => {
    return ((0, jsx_runtime_1.jsx)(Budget_styles_1.CustomButton, { style: {
            height: `${btnHeight}`,
            width: buttonWidth,
            backgroundColor: disable ? "grey" : "",
            color: "white",
            marginTop: "-5px",
            pointerEvents: disable ? "none" : "auto",
        }, disabled: disable, onClick: (e) => {
            e.preventDefault();
            !disable && onClick(e);
        }, type: type, children: loading ? ((0, jsx_runtime_1.jsx)("div", { style: { marginTop: "-20px" }, children: (0, jsx_runtime_1.jsx)("img", { src: "https://assets.rario.com/RARIO/App/images/button/white_loader-1.gif", style: { height: "70px", width: "70px" } }) })) : (buttonText) }));
};
exports.default = Button;
