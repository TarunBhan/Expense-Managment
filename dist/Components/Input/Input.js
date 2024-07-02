"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const baseTheme_1 = __importDefault(require("../Theme/baseTheme"));
const Input = ({ headingText, type, autoFocus = false, placeHolder, props }) => {
    console.log(props, "index");
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            display: "flex",
            flexDirection: "column",
            width: "70%",
        }, children: [(0, jsx_runtime_1.jsx)("text", { style: {
                    fontSize: baseTheme_1.default.fontSizes[0],
                    fontFamily: baseTheme_1.default.fonts.secondary,
                    color: baseTheme_1.default.colors.lightGray,
                    paddingLeft: "2px",
                    paddingBottom: "4px",
                }, children: headingText }), (0, jsx_runtime_1.jsx)("input", Object.assign({ autoFocus: autoFocus, placeholder: placeHolder, style: {
                    height: "30px",
                    width: "100%",
                    borderColor: "transparent",
                    background: "#ededed",
                    borderRadius: "10px",
                }, type: type }, props))] }));
};
exports.default = Input;
