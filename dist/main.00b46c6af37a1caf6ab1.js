/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`, "",{"version":3,"sources":["webpack://./src/App.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE;IACE,4CAA4C;EAC9C;AACF;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Components/Auth/Form.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components/Auth/Form.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
    position: relative;
    min-width: 50%;
    height:100%;
    background-color: white;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .form-container {
    display: flex;
    width: 200%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
  }
  .form1{
    width:50%;
    padding: 20px;
    box-sizing: border-box;
  }

  .show-login {
    transform: translateX(0%);
  }

  .show-signup {
    transform: translateX(-50%);
  }
`, "",{"version":3,"sources":["webpack://./src/Components/Auth/Form.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,uBAAuB;IACvB,gBAAgB;IAChB,uCAAuC;EACzC;;EAEA;IACE,aAAa;IACb,WAAW;IACX,gBAAgB;IAChB,sCAAsC;EACxC;EACA;IACE,SAAS;IACT,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,2BAA2B;EAC7B","sourcesContent":[".container {\n    position: relative;\n    min-width: 50%;\n    height:100%;\n    background-color: white;\n    overflow: hidden;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  }\n\n  .form-container {\n    display: flex;\n    width: 200%;\n    overflow: hidden;\n    transition: transform 0.5s ease-in-out;\n  }\n  .form1{\n    width:50%;\n    padding: 20px;\n    box-sizing: border-box;\n  }\n\n  .show-login {\n    transform: translateX(0%);\n  }\n\n  .show-signup {\n    transform: translateX(-50%);\n  }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/Assets/Images/Expense_bg.jpg":
/*!******************************************!*\
  !*** ./src/Assets/Images/Expense_bg.jpg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Expense_bg.a9b6403055fa78982f7252f12fbcd06e.jpg");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/App.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Components/Auth/Form.css":
/*!**************************************!*\
  !*** ./src/Components/Auth/Form.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Form.css */ "./node_modules/css-loader/dist/cjs.js!./src/Components/Auth/Form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
__webpack_require__(/*! ./App.css */ "./src/App.css");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
const Layout_1 = __importDefault(__webpack_require__(/*! ./Components/Layout/Layout */ "./src/Components/Layout/Layout.tsx"));
const Login_1 = __importDefault(__webpack_require__(/*! ./Components/Auth/Login */ "./src/Components/Auth/Login.tsx"));
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const UserContext_1 = __webpack_require__(/*! ./context/UserContext */ "./src/context/UserContext.tsx");
const Header_1 = __importDefault(__webpack_require__(/*! ./Components/Header/Header */ "./src/Components/Header/Header.tsx"));
const ExpenseDetail_1 = __importDefault(__webpack_require__(/*! ./Components/ExpenseDetail/ExpenseDetail */ "./src/Components/ExpenseDetail/ExpenseDetail.tsx"));
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
exports["default"] = App;


/***/ }),

/***/ "./src/Components/Auth/Login.tsx":
/*!***************************************!*\
  !*** ./src/Components/Auth/Login.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const auth_1 = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.cjs.js");
const firebase_1 = __webpack_require__(/*! ../../firebase */ "./src/firebase.ts");
const Input_1 = __importDefault(__webpack_require__(/*! ../Input/Input */ "./src/Components/Input/Input.tsx"));
const Button_1 = __importDefault(__webpack_require__(/*! ../Button/Button */ "./src/Components/Button/Button.tsx"));
const baseTheme_1 = __importDefault(__webpack_require__(/*! ../Theme/baseTheme */ "./src/Components/Theme/baseTheme.ts"));
const react_hook_form_1 = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.cjs.js");
const constant_1 = __webpack_require__(/*! ../constant /constant */ "./src/Components/constant /constant.ts");
__webpack_require__(/*! ./Form.css */ "./src/Components/Auth/Form.css");
const Register_1 = __importDefault(__webpack_require__(/*! ./Register */ "./src/Components/Auth/Register.tsx"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
const UserContext_1 = __webpack_require__(/*! ../../context/UserContext */ "./src/context/UserContext.tsx");
const Login = () => {
    var _a, _b, _c;
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [formData, setFormData] = (0, react_1.useState)();
    const { user } = (0, react_1.useContext)(UserContext_1.UserContex);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [isLoginForm, setIsLoginForm] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);
    const { formState: { errors, isValid }, watch, register, } = (0, react_hook_form_1.useForm)({
        mode: "onChange",
        reValidateMode: "onChange",
    });
    (0, react_1.useEffect)(() => {
        const subscription = watch((data) => {
            setFormData((prev) => (Object.assign(Object.assign({}, prev), data)));
        });
        return () => subscription.unsubscribe();
    }, [watch]);
    (0, react_1.useEffect)(() => {
        console.log(formData === null || formData === void 0 ? void 0 : formData.email, ">>>>");
    }, [formData]);
    const handleLogin = () => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        //Add Firebase logic For User
        try {
            yield (0, auth_1.signInWithEmailAndPassword)(firebase_1.auth, (formData === null || formData === void 0 ? void 0 : formData.email) || "", (formData === null || formData === void 0 ? void 0 : formData.password) || "");
            setLoading(false);
            window.location.href = "/";
        }
        catch (e) {
            setLoading(false);
        }
    });
    const name = isLoginForm ? "show-login" : "show-signup";
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            flex: 1,
            height: "100vh",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            backgroundColor: "skyblue",
        }, children: (0, jsx_runtime_1.jsxs)("div", { style: {
                height: 450,
                width: 700,
                backgroundColor: "white",
                borderRadius: "15px",
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
            }, children: [(0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)("div", { className: `form-container ${name}`, children: [(0, jsx_runtime_1.jsx)("div", { className: "form1", children: (0, jsx_runtime_1.jsx)(Register_1.default, { onClick: () => {
                                        console.log("render");
                                        setIsLoginForm(false);
                                    } }) }), (0, jsx_runtime_1.jsx)("div", { className: "form1", children: (0, jsx_runtime_1.jsxs)("form", { style: {
                                        minWidth: "50%",
                                        height: "100%",
                                        borderRadius: "15px",
                                        flexDirection: "column",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        position: "relative",
                                    }, children: [(0, jsx_runtime_1.jsx)("text", { style: {
                                                fontSize: baseTheme_1.default.fontSizes[6],
                                                fontFamily: baseTheme_1.default.fonts.serif,
                                                color: baseTheme_1.default.colors.black,
                                            }, children: "Login" }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "email", headingText: "Email", autoFocus: true, placeHolder: "email", props: register("email", {
                                                required: "Please enter Email Adress",
                                                pattern: {
                                                    value: constant_1.EMAIL_REGEX,
                                                    message: "Please Enter a Valid Email-id",
                                                },
                                            }) }), (0, jsx_runtime_1.jsx)("div", { style: {
                                                height: "10px",
                                                width: "70%",
                                                paddingBottom: "10px",
                                            }, children: (errors === null || errors === void 0 ? void 0 : errors.email) && ((0, jsx_runtime_1.jsx)("text", { style: {
                                                    fontSize: baseTheme_1.default.fontSizes[0],
                                                    fontFamily: baseTheme_1.default.fonts.secondary,
                                                    fontWeight: baseTheme_1.default.fontWeights[3],
                                                    color: baseTheme_1.default.colors.red,
                                                }, children: (_a = errors === null || errors === void 0 ? void 0 : errors.email) === null || _a === void 0 ? void 0 : _a.message })) }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "password", headingText: "Password", placeHolder: "Password", props: register("password", {
                                                required: "Please enter password",
                                                pattern: {
                                                    value: constant_1.PASSWORD,
                                                    message: "Please Enter a Valid password",
                                                },
                                            }) }), (0, jsx_runtime_1.jsx)("div", { style: {
                                                height: "10px",
                                                width: "70%",
                                                paddingBottom: "15px",
                                            }, children: ((_b = errors === null || errors === void 0 ? void 0 : errors.password) === null || _b === void 0 ? void 0 : _b.message) && ((0, jsx_runtime_1.jsx)("text", { style: {
                                                    fontSize: baseTheme_1.default.fontSizes[0],
                                                    fontFamily: baseTheme_1.default.fonts.secondary,
                                                    fontWeight: baseTheme_1.default.fontWeights[3],
                                                    color: baseTheme_1.default.colors.red,
                                                }, children: (_c = errors === null || errors === void 0 ? void 0 : errors.password) === null || _c === void 0 ? void 0 : _c.message })) }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Login", onClick: (e) => {
                                                e.preventDefault();
                                                handleLogin();
                                            }, disable: !isValid, loading: loading }), (0, jsx_runtime_1.jsxs)("div", { style: {
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginTop: "60px",
                                            }, children: [(0, jsx_runtime_1.jsx)("text", { style: {
                                                        fontSize: baseTheme_1.default.fontSizes[0],
                                                        fontFamily: baseTheme_1.default.fonts.secondary,
                                                        fontWeight: baseTheme_1.default.fontWeights[3],
                                                    }, children: `Don't Have An Account?` }), (0, jsx_runtime_1.jsx)("text", { onClick: () => {
                                                        setIsLoginForm(true);
                                                    }, style: {
                                                        fontSize: baseTheme_1.default.fontSizes[1],
                                                        fontFamily: baseTheme_1.default.fonts.secondary,
                                                        fontWeight: baseTheme_1.default.fontWeights[3],
                                                        color: baseTheme_1.default.colors.cyanBlue,
                                                        paddingLeft: "1px",
                                                    }, children: " Sign Up" })] })] }) })] }) }), (0, jsx_runtime_1.jsx)("div", { style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }, children: (0, jsx_runtime_1.jsx)("img", { src: __webpack_require__(/*! ../../Assets/Images/Expense_bg.jpg */ "./src/Assets/Images/Expense_bg.jpg"), alt: "Expense Image", width: "90%", height: "100%" }) })] }) }));
};
exports["default"] = Login;


/***/ }),

/***/ "./src/Components/Auth/Register.tsx":
/*!******************************************!*\
  !*** ./src/Components/Auth/Register.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const auth_1 = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.cjs.js");
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const firebase_1 = __webpack_require__(/*! ../../firebase */ "./src/firebase.ts");
const firestore_1 = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.cjs.js");
const baseTheme_1 = __importDefault(__webpack_require__(/*! ../Theme/baseTheme */ "./src/Components/Theme/baseTheme.ts"));
const Button_1 = __importDefault(__webpack_require__(/*! ../Button/Button */ "./src/Components/Button/Button.tsx"));
const Input_1 = __importDefault(__webpack_require__(/*! ../Input/Input */ "./src/Components/Input/Input.tsx"));
const constant_1 = __webpack_require__(/*! ../constant /constant */ "./src/Components/constant /constant.ts");
const react_hook_form_1 = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.cjs.js");
const Register = ({ onClick }) => {
    var _a, _b, _c;
    const [formData, setFormData] = (0, react_1.useState)();
    const [loading, setLoading] = (0, react_1.useState)(false);
    const { formState: { errors, isValid }, watch, register, } = (0, react_hook_form_1.useForm)({
        mode: "onChange",
        reValidateMode: "onChange",
    });
    (0, react_1.useEffect)(() => {
        const subscription = watch((data) => {
            setFormData((prev) => (Object.assign(Object.assign({}, prev), data)));
        });
        return () => subscription.unsubscribe();
    }, [watch]);
    const handleRegister = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        try {
            //Add Firebase logic For User
            yield (0, auth_1.createUserWithEmailAndPassword)(firebase_1.auth, (formData === null || formData === void 0 ? void 0 : formData.email) || "", (formData === null || formData === void 0 ? void 0 : formData.password) || "");
            const user = firebase_1.auth.currentUser;
            if (user) {
                yield (0, firestore_1.setDoc)((0, firestore_1.doc)(firebase_1.db, "users", user === null || user === void 0 ? void 0 : user.uid), {
                    email: (formData === null || formData === void 0 ? void 0 : formData.email) || "",
                    firstName: formData === null || formData === void 0 ? void 0 : formData.firstName,
                    lastName: formData === null || formData === void 0 ? void 0 : formData.lastName,
                });
            }
            console.log({ user });
        }
        catch (error) {
            console.log(error);
        }
    });
    return ((0, jsx_runtime_1.jsxs)("form", { style: {
            minWidth: "50%",
            backgroundColor: "white",
            height: "100%",
            borderRadius: "15px",
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
        }, children: [(0, jsx_runtime_1.jsx)("text", { style: {
                    fontSize: baseTheme_1.default.fontSizes[6],
                    fontFamily: baseTheme_1.default.fonts.serif,
                    color: baseTheme_1.default.colors.black,
                }, children: "SignUp" }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "text", headingText: "FirstName", autoFocus: true, placeHolder: "FirstName", props: register("firstName", {
                    required: "Please enter your FirstName",
                    max: {
                        value: 40,
                        message: "Please Write Your Correct Name",
                    },
                }) }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "text", headingText: "LastName", autoFocus: true, placeHolder: "Last Name", props: register("lastName", {
                    required: "Please enter your LastName",
                    max: {
                        value: 40,
                        message: "Please Write Your Correct Name",
                    },
                }) }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "email", headingText: "Email", autoFocus: true, placeHolder: "email", props: register("email", {
                    required: "Please enter Email Adress",
                    pattern: {
                        value: constant_1.EMAIL_REGEX,
                        message: "Please Enter a Valid Email-id",
                    },
                }) }), (0, jsx_runtime_1.jsx)("div", { style: {
                    height: "10px",
                    width: "70%",
                    paddingBottom: "10px",
                }, children: (errors === null || errors === void 0 ? void 0 : errors.email) && ((0, jsx_runtime_1.jsx)("text", { style: {
                        fontSize: baseTheme_1.default.fontSizes[0],
                        fontFamily: baseTheme_1.default.fonts.secondary,
                        fontWeight: baseTheme_1.default.fontWeights[3],
                        color: baseTheme_1.default.colors.red,
                    }, children: (_a = errors === null || errors === void 0 ? void 0 : errors.email) === null || _a === void 0 ? void 0 : _a.message })) }), (0, jsx_runtime_1.jsx)(Input_1.default, { type: "password", headingText: "Password", placeHolder: "Password", props: register("password", {
                    required: "Please enter password",
                    pattern: {
                        value: constant_1.PASSWORD,
                        message: "Please Enter a Valid password",
                    },
                }) }), (0, jsx_runtime_1.jsx)("div", { style: {
                    height: "10px",
                    width: "70%",
                    paddingBottom: "15px",
                }, children: ((_b = errors === null || errors === void 0 ? void 0 : errors.password) === null || _b === void 0 ? void 0 : _b.message) && ((0, jsx_runtime_1.jsx)("text", { style: {
                        fontSize: baseTheme_1.default.fontSizes[0],
                        fontFamily: baseTheme_1.default.fonts.secondary,
                        fontWeight: baseTheme_1.default.fontWeights[3],
                        color: baseTheme_1.default.colors.red,
                    }, children: (_c = errors === null || errors === void 0 ? void 0 : errors.password) === null || _c === void 0 ? void 0 : _c.message })) }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Register", onClick: (e) => {
                    e.preventDefault();
                    handleRegister(e);
                }, disable: !isValid, loading: loading }), (0, jsx_runtime_1.jsxs)("div", { style: {
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "60px",
                }, children: [(0, jsx_runtime_1.jsx)("text", { style: {
                            fontSize: baseTheme_1.default.fontSizes[0],
                            fontFamily: baseTheme_1.default.fonts.secondary,
                            fontWeight: baseTheme_1.default.fontWeights[3],
                        }, children: `Don't Have An Account?` }), (0, jsx_runtime_1.jsx)("text", { onClick: () => onClick(), style: {
                            fontSize: baseTheme_1.default.fontSizes[1],
                            fontFamily: baseTheme_1.default.fonts.secondary,
                            fontWeight: baseTheme_1.default.fontWeights[3],
                            color: baseTheme_1.default.colors.cyanBlue,
                            paddingLeft: "1px",
                        }, children: " Sign Up" })] })] }));
};
exports["default"] = Register;


/***/ }),

/***/ "./src/Components/Budget/AddExpense.tsx":
/*!**********************************************!*\
  !*** ./src/Components/Budget/AddExpense.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const baseTheme_1 = __importDefault(__webpack_require__(/*! ../Theme/baseTheme */ "./src/Components/Theme/baseTheme.ts"));
const UserContext_1 = __webpack_require__(/*! ../../context/UserContext */ "./src/context/UserContext.tsx");
const react_hook_form_1 = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.cjs.js");
const Button_1 = __importDefault(__webpack_require__(/*! ../Button/Button */ "./src/Components/Button/Button.tsx"));
const firebase_1 = __webpack_require__(/*! ../../firebase */ "./src/firebase.ts");
const firestore_1 = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.cjs.js");
const AddExpense = () => {
    const { user, totalBudget, updateData } = (0, react_1.useContext)(UserContext_1.UserContex);
    console.log({ totalBudget });
    const { register, formState: { errors, isValid }, reset, watch, } = (0, react_hook_form_1.useForm)();
    const [isLoading, setIsLoading] = (0, react_1.useState)();
    const [data, setData] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        const subscription = watch((data) => {
            setData((prev) => (Object.assign(Object.assign({}, prev), data)));
        });
        return () => subscription.unsubscribe();
    }, [watch]);
    const handleBudget = () => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        console.log(data === null || data === void 0 ? void 0 : data.expenseAmount);
        const expenseDocRef = (0, firestore_1.doc)(firebase_1.db, `users/${user === null || user === void 0 ? void 0 : user.uid}/budgets/${data === null || data === void 0 ? void 0 : data.budgetName}`);
        try {
            yield (0, firestore_1.setDoc)(expenseDocRef, {
                expenses: (0, firestore_1.arrayUnion)({
                    name: data === null || data === void 0 ? void 0 : data.expenseName,
                    value: Number(data === null || data === void 0 ? void 0 : data.expenseAmount),
                    key: Math.floor(Math.random() * (999 - 100 + 1) + 100),
                }),
            }, { merge: true });
            setIsLoading(false);
            updateData();
            //   reset();
        }
        catch (e) {
            setIsLoading(false);
            console.log(e);
        }
    });
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            display: "flex",
            width: "100%",
            maxWidth: "380px",
            height: "186px",
            borderRadius: "10px",
            justifyContent: "center",
            padding: "10px",
            backgroundColor: "white",
            alignItems: "center",
            boxShadow: "rgba(0, 0, 0, 0.2) -1px -2px 19px 3px",
        }, children: (0, jsx_runtime_1.jsx)("div", { style: {
                border: "1px dashed black",
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "flex-start",
                minWidth: "300px",
                borderRadius: "10px",
            }, children: (0, jsx_runtime_1.jsxs)("form", { style: {
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                }, children: [(0, jsx_runtime_1.jsx)("span", { children: "Add New Expense" }), (0, jsx_runtime_1.jsxs)("div", { style: {
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            height: "100%",
                        }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { width: "50%" }, children: [(0, jsx_runtime_1.jsx)("text", { style: {
                                            fontFamily: baseTheme_1.default.fonts.secondary,
                                            fontSize: baseTheme_1.default.fontSizes[0],
                                            marginBottom: "10px",
                                            marginTop: "5px",
                                        }, children: "Expense Name" }), (0, jsx_runtime_1.jsx)("input", Object.assign({ type: "text", autoFocus: true, required: true, placeholder: "Expense Name", style: {
                                            width: "90%",
                                            fontSize: baseTheme_1.default.fontSizes[0],
                                            height: "20px",
                                        } }, register("expenseName", {
                                        required: "Please enter Your Expense Name",
                                    })))] }), (0, jsx_runtime_1.jsxs)("div", { style: { width: "50%" }, children: [(0, jsx_runtime_1.jsx)("text", { style: {
                                            fontFamily: baseTheme_1.default.fonts.secondary,
                                            fontSize: baseTheme_1.default.fontSizes[0],
                                            marginBottom: "10px",
                                            marginTop: "5px",
                                        }, children: "Amount" }), (0, jsx_runtime_1.jsx)("input", Object.assign({ type: "number", required: true, placeholder: "\u20B9250,\u20B920", style: {
                                            width: "90%",
                                            height: "20px",
                                            fontSize: baseTheme_1.default.fontSizes[0],
                                        } }, register("expenseAmount", {
                                        required: "Please enter Expense Amount",
                                    })))] })] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "20px",
                            flexDirection: "column",
                        }, children: [(0, jsx_runtime_1.jsx)("text", { style: {
                                    fontFamily: baseTheme_1.default.fonts.secondary,
                                    fontSize: baseTheme_1.default.fontSizes[2],
                                    marginTop: "10px",
                                }, children: "Select Budget" }), (0, jsx_runtime_1.jsxs)("select", Object.assign({}, register("budgetName", { required: "select one option" }), { style: { width: "100%", height: "25px" }, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "--Please Select A Budget--" }), totalBudget &&
                                        (totalBudget === null || totalBudget === void 0 ? void 0 : totalBudget.map((item, index) => {
                                            console.log({ item });
                                            return ((0, jsx_runtime_1.jsx)("option", { value: item, children: item }, index));
                                        }))] }))] }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Add Expense", disable: !isValid, onClick: handleBudget, btnHeight: "35px", loading: isLoading, type: "submit" })] }) }) }));
};
exports["default"] = AddExpense;


/***/ }),

/***/ "./src/Components/Budget/Budget.styles.ts":
/*!************************************************!*\
  !*** ./src/Components/Budget/Budget.styles.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomButton = exports.ProgressBar = void 0;
const styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
exports.ProgressBar = styled_components_1.default.div `
  width: ${({ width = "0%" }) => width};
  background-color: ${({ color }) => color};

  height: 19px;
  border-radius: 30px;
  transition: 0.2s linear;
  transition-property: width, background-color;
  animation: ${({ animationName = "ProgressAnimation" }) => animationName} 2s;
  @keyframes ${({ animationName = "ProgressAnimation" }) => animationName} {
    0% {
      width: 0%;
      background-color: ${({ color }) => color};
    }
    100% {
      width: ${({ width = "0%" }) => width};
      background-color: ${({ color }) => color};
    }
  }
`;
exports.CustomButton = styled_components_1.default.button `
  width: 70%;
  border-color: transparent;
  border-radius: 8px;
  align-self: center;
  align-items: center;
  margin-top: 19px;
  cursor: pointer;
  background-color: #059ce8;
  transition: background 1s;
  &:hover {
    background-color: #17a7f5;
    background-image: radial-gradient(circle, transparent 1%, #47a7f5 1%);
    background-size: 15000%;
    background-position: center;
  }
  &:active {
    transition: background 0s;
    background-color: #6eb9f7;
    background-size: 100%;
  }
`;


/***/ }),

/***/ "./src/Components/Budget/BudgetWidget.tsx":
/*!************************************************!*\
  !*** ./src/Components/Budget/BudgetWidget.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const Button_1 = __importDefault(__webpack_require__(/*! ../Button/Button */ "./src/Components/Button/Button.tsx"));
const baseTheme_1 = __importDefault(__webpack_require__(/*! ../Theme/baseTheme */ "./src/Components/Theme/baseTheme.ts"));
const firestore_1 = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.cjs.js");
const firebase_1 = __webpack_require__(/*! ../../firebase */ "./src/firebase.ts");
const UserContext_1 = __webpack_require__(/*! ../../context/UserContext */ "./src/context/UserContext.tsx");
const react_hook_form_1 = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.cjs.js");
const utils_1 = __webpack_require__(/*! ../utils */ "./src/Components/utils/index.ts");
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
exports["default"] = BudgetWidget;


/***/ }),

/***/ "./src/Components/Budget/ExpenseWidget.tsx":
/*!*************************************************!*\
  !*** ./src/Components/Budget/ExpenseWidget.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const baseTheme_1 = __importDefault(__webpack_require__(/*! ../Theme/baseTheme */ "./src/Components/Theme/baseTheme.ts"));
const Budget_styles_1 = __webpack_require__(/*! ./Budget.styles */ "./src/Components/Budget/Budget.styles.ts");
const firestore_1 = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.cjs.js");
const firebase_1 = __webpack_require__(/*! ../../firebase */ "./src/firebase.ts");
const Button_1 = __importDefault(__webpack_require__(/*! ../Button/Button */ "./src/Components/Button/Button.tsx"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
const utils_1 = __webpack_require__(/*! ../utils */ "./src/Components/utils/index.ts");
const UserContext_1 = __webpack_require__(/*! ../../context/UserContext */ "./src/context/UserContext.tsx");
const ExpenseWidget = ({ budgetData }) => {
    const { budgetName } = (0, react_router_dom_1.useParams)();
    const { user, updateData } = (0, react_1.useContext)(UserContext_1.UserContex);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const color = baseTheme_1.default.colors.blue;
    const { totalExpenses, amountLeft, widthPercentage } = (0, utils_1.getDetailedExpensesInfo)(budgetData);
    console.log(">>>>>");
    const deleteBudget = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const expenseDocRef = (0, firestore_1.doc)(firebase_1.db, `users/${user === null || user === void 0 ? void 0 : user.uid}/budgets`, `${budgetName || (budgetData === null || budgetData === void 0 ? void 0 : budgetData.budgetName)}`);
            yield (0, firestore_1.deleteDoc)(expenseDocRef);
            updateData();
        }
        catch (e) {
            console.log(e);
        }
    });
    console.log(widthPercentage, budgetData === null || budgetData === void 0 ? void 0 : budgetData.budgetName, ">>>>");
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            width: "100%",
            display: "flex",
            height: "180px",
            borderRadius: "12px",
            maxWidth: "380px",
            boxShadow: "rgba(27,187,195,0.5) -1px -2px 19px 3px",
            padding: "10px",
            justifyContent: "center",
        }, children: (0, jsx_runtime_1.jsxs)("div", { style: {
                border: "1px dashed black",
                padding: "10px",
                width: "100%",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { style: {
                                flexDirection: "row",
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                            }, children: [(0, jsx_runtime_1.jsxs)("text", { style: {
                                        fontSize: baseTheme_1.default.fontSizes[3],
                                        color,
                                    }, children: ["Budget:", `${budgetName || (budgetData === null || budgetData === void 0 ? void 0 : budgetData.budgetName)}`] }), (0, jsx_runtime_1.jsxs)("text", { style: { fontSize: baseTheme_1.default.fontSizes[3], color }, children: ["Total:\u20B9", budgetData === null || budgetData === void 0 ? void 0 : budgetData.budgetValue, " Budget"] })] }), (0, jsx_runtime_1.jsx)("div", { style: {
                                width: "100%",
                                background: baseTheme_1.default.colors.blacks[3],
                                height: "19px",
                                borderRadius: "12px",
                                marginTop: "12px",
                            }, children: (0, jsx_runtime_1.jsx)(Budget_styles_1.ProgressBar, { width: widthPercentage, color: color, animationName: `progressAnimate-${(0, utils_1.getRandomNumber)()}` }) }), (0, jsx_runtime_1.jsxs)("div", { style: {
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginTop: "10px",
                            }, children: [(0, jsx_runtime_1.jsxs)("text", { style: { fontSize: baseTheme_1.default.fontSizes[3], color }, children: ["Spent: \u20B9", totalExpenses] }), (0, jsx_runtime_1.jsxs)("text", { style: { fontSize: baseTheme_1.default.fontSizes[3], color }, children: ["Remaining: \u20B9", amountLeft] })] })] }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: deleteBudget, buttonText: "Delete Budget", btnHeight: "40px" })] }) }));
};
exports["default"] = ExpenseWidget;


/***/ }),

/***/ "./src/Components/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/Components/Button/Button.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const Budget_styles_1 = __webpack_require__(/*! ../Budget/Budget.styles */ "./src/Components/Budget/Budget.styles.ts");
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
exports["default"] = Button;


/***/ }),

/***/ "./src/Components/ExpenseDetail/ExpenseDetail.tsx":
/*!********************************************************!*\
  !*** ./src/Components/ExpenseDetail/ExpenseDetail.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
const ExpenseWidget_1 = __importDefault(__webpack_require__(/*! ../Budget/ExpenseWidget */ "./src/Components/Budget/ExpenseWidget.tsx"));
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const firestore_1 = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.cjs.js");
const firebase_1 = __webpack_require__(/*! ../../firebase */ "./src/firebase.ts");
const UserContext_1 = __webpack_require__(/*! ../../context/UserContext */ "./src/context/UserContext.tsx");
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
exports["default"] = ExpenseDetailScreen;


/***/ }),

/***/ "./src/Components/Header/Header.tsx":
/*!******************************************!*\
  !*** ./src/Components/Header/Header.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const UserContext_1 = __webpack_require__(/*! ../../context/UserContext */ "./src/context/UserContext.tsx");
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
exports["default"] = Header;


/***/ }),

/***/ "./src/Components/Home/Home.tsx":
/*!**************************************!*\
  !*** ./src/Components/Home/Home.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const BudgetWidget_1 = __importDefault(__webpack_require__(/*! ../Budget/BudgetWidget */ "./src/Components/Budget/BudgetWidget.tsx"));
const ExpenseWidget_1 = __importDefault(__webpack_require__(/*! ../Budget/ExpenseWidget */ "./src/Components/Budget/ExpenseWidget.tsx"));
const firestore_1 = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.cjs.js");
const firebase_1 = __webpack_require__(/*! ../../firebase */ "./src/firebase.ts");
const AddExpense_1 = __importDefault(__webpack_require__(/*! ../Budget/AddExpense */ "./src/Components/Budget/AddExpense.tsx"));
const UserContext_1 = __webpack_require__(/*! ../../context/UserContext */ "./src/context/UserContext.tsx");
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
exports["default"] = Home;


/***/ }),

/***/ "./src/Components/Input/Input.tsx":
/*!****************************************!*\
  !*** ./src/Components/Input/Input.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const baseTheme_1 = __importDefault(__webpack_require__(/*! ../Theme/baseTheme */ "./src/Components/Theme/baseTheme.ts"));
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
exports["default"] = Input;


/***/ }),

/***/ "./src/Components/Layout/Layout.tsx":
/*!******************************************!*\
  !*** ./src/Components/Layout/Layout.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const auth_1 = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.cjs.js");
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const firebase_1 = __webpack_require__(/*! ../../firebase */ "./src/firebase.ts");
const UserContext_1 = __webpack_require__(/*! ../../context/UserContext */ "./src/context/UserContext.tsx");
const Home_1 = __importDefault(__webpack_require__(/*! ../Home/Home */ "./src/Components/Home/Home.tsx"));
const Layout = () => {
    const { user: userData } = (0, react_1.useContext)(UserContext_1.UserContex);
    (0, react_1.useEffect)(() => {
        const unsubscribe = (0, auth_1.onAuthStateChanged)(firebase_1.auth, (user) => {
            if (user) {
                console.log("User is authenticated:", user);
            }
            else {
                window.location.href = "/auth";
            }
        });
        // Clean up the subscription
        return () => unsubscribe();
    }, []);
    (0, react_1.useEffect)(() => { }, []);
    return ((0, jsx_runtime_1.jsx)("div", { id: "asa", style: {
            display: "grid",
            width: "100%",
            marginInline: "auto",
            placeItems: "start",
        }, children: (0, jsx_runtime_1.jsx)("div", { style: {
                display: "flex",
                flexDirection: "row",
                width: "100%",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "40px",
            }, children: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }) }));
};
exports["default"] = Layout;


/***/ }),

/***/ "./src/Components/Theme/baseTheme.ts":
/*!*******************************************!*\
  !*** ./src/Components/Theme/baseTheme.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.maxLayoutWidth = void 0;
const baseTheme = {
    breakpoints: ["576px", "767px", "992px", "1200px", "1441px", "1920px"],
    space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
    fontSizes: [10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 80, 96],
    fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    lineHeights: {
        solid: 1,
        title: 1.25,
        copy: 1.5,
    },
    letterSpacings: {
        normal: "normal",
        tracked: "0.1em",
        tight: "-0.05em",
        mega: "0.25em",
        primary: "normal",
    },
    fonts: {
        serif: "athelas, georgia, times, serif",
        sansSerif: '"Roboto", sans-serif',
        primary: '"Rigid Square", sans-serif',
        secondary: '"Rubik", sans-serif',
    },
    borders: [
        0,
        "1px solid",
        "2px solid",
        "4px solid",
        "8px solid",
        "16px solid",
        "32px solid",
    ],
    radii: [0, 2, 4, 8, 16, 9999, "100%"],
    width: [16, 24, 32, 64, 128, 256],
    heights: [16, 24, 32, 64, 128, 256],
    maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
    colors: {
        // Copy Typography
        /**
         * From this point down,
         * review color naming in a more generic way:
         * this way we can replace theme.
         * E.g: Primary: '#0E5AA7', cta: '#EE2527',
         */
        mobileModalFooter: "rgba(255, 255, 255, 0.04)",
        successBannerBG: "#206B50",
        monoGrey: "#4F5358",
        lightMonoGrey: "#686B70",
        atomicTangerine: "#FF996D",
        darkAtomicTangerine: "#362623",
        dimatomicTangerine: "#FF996D0D",
        brown: "#31261d",
        lightBrown: "#BDA46B",
        black: "#000",
        blue: "#0E5AA7",
        lightGray: "rgb(167, 174, 187)",
        mint: "#36B286",
        lightMint: "rgba(54, 178, 134, 0.6)",
        primary: "#3CC695",
        lightPrimary: "rgba(255, 79, 68, 0.6)",
        lightAtomicTangerine: "rgba(255, 79, 68, 0.2)",
        purpureus: "rgba(146, 54, 178, 0.5)",
        secondary: "#FF4F44",
        lightSecondary: "#184D3F",
        red: "#EE2527",
        silver: "#C4C4C4",
        tartOrange: "#FF4F44",
        secondaryBorder: "#CD413A",
        jet: "#343434",
        white: "#fff",
        warningBG: "rgba(54, 178, 134, 0.2)",
        primaryBorder: "rgba(255, 255, 255, 0.06)",
        yellow: "#ffd900",
        transparent: "transparent",
        secondaryHighlight: "#FF3D3D",
        charcoal: "#212127",
        whiteSmoke: "#EFEFEF",
        blackGray: "#1C1C1C",
        darkGreen: "#00011B",
        CTALightText: "#5ECDAE",
        maize: "#F2C94C",
        primaryText: "#fff",
        success: "#36B286",
        pending: "#F2C94C",
        failure: "#FF4F44",
        gunMetalGrey: "#262C37",
        darkSecondary: "#206B50",
        carbon: "#343434",
        customWhite: "#ffffff59",
        darkGold: "#9F642F",
        darkRaspberry: "#842857",
        richBlack: "#04080F",
        richBlackDark: "#080B10",
        richBlackLight: "#040910",
        eerieBlack: "#13181E",
        brightGray: "#EBEBEB",
        spanishGray: "#9F9D9B",
        dimGray: "#686B70",
        lightBlack: "#222222",
        darkGrey: "#4f5357",
        grey: "#9c9d9f",
        lightGreen: "#36B286",
        chineseBlack: "#11151C",
        darkGunmetal: "#1D2228",
        anthracite: "#2A2B2C",
        japaneseCarmine: "#9B332F",
        philippineBlue: "rgba(68, 120, 255, 0.6)",
        signalGreen: "#226E57",
        lightViolet: "rgba(136, 136, 255, 0.5)",
        lightGrey: "#CCCCCC",
        tintedGray: "#9B9D9F",
        cyanBlue: "#4E77C7",
        serenity: "#4E77C7",
        lightSerenity: "rgba(54, 77, 154, 0.1)",
        platinum: "#E7E7E6",
        blueberry: "#4E8AFF",
        darkCharcoal: "#333333",
        greyishWhite: "#E6E6E7",
        wolfram: "#B4B5B7",
        harvestGold: "#E2B872",
        etonBlue: "#83C2AF",
        graniteGray: "#666666",
        mustard: "#C2A340",
        lightSecondaryBorder: "#993029",
        lightSecondaryBG: "rgba(255, 79, 68, 0.15)",
        footerBG: "#CD413A",
        primaryHighlight: "#3CC695",
        widgetBG: "#993029",
        secondaryBG: "#FF4F44",
        ctaGrayBG: "rgba(29, 34, 40, 1)",
        graySectionBG: "rgba(17, 21, 28, 1)",
        graySmallSectionBg: "rgba(39, 45, 55, 1)",
        redSmallSectionBg: "rgba(255,79,68,.2)",
        secondaryVariants: [
            "rgba(196, 131, 55,.0125)",
            "rgba(196, 131, 55,.025)",
            "rgba(196, 131, 55,.05)",
            "rgba(196, 131, 55,.1)",
            "rgba(196, 131, 55,.2)",
            "rgba(196, 131, 55,.3)",
            "rgba(196, 131, 55,.4)",
            "rgba(196, 131, 55,.5)",
            "rgba(196, 131, 55,.6)",
            "rgba(196, 131, 55,.7)",
            "rgba(196, 131, 55,.8)",
            "rgba(196, 131, 55,.9)",
        ],
        blacks: [
            "rgba(0,0,0,.0125)",
            "rgba(0,0,0,.025)",
            "rgba(0,0,0,.05)",
            "rgba(0,0,0,.1)",
            "rgba(0,0,0,.2)",
            "rgba(0,0,0,.3)",
            "rgba(0,0,0,.4)",
            "rgba(0,0,0,.5)",
            "rgba(0,0,0,.6)",
            "rgba(0,0,0,.7)",
            "rgba(0,0,0,.8)",
            "rgba(0,0,0,.9)",
        ],
        whites: [
            "rgba(255,255,255,.0125)",
            "rgba(255,255,255,.025)",
            "rgba(255,255,255,.05)",
            "rgba(255,255,255,.1)",
            "rgba(255,255,255,.2)",
            "rgba(255,255,255,.3)",
            "rgba(255,255,255,.4)",
            "rgba(255,255,255,.5)",
            "rgba(255,255,255,.6)",
            "rgba(255,255,255,.7)",
            "rgba(255,255,255,.8)",
            "rgba(255,255,255,.9)",
        ],
        stepsContainer: {
            background: "#36171A",
            border: "#993029",
            content: "#993029",
        },
    },
    maxLayoutWidth: "1280px",
    maxDesktopLayoutWidth: 400,
    button: {
        primaryOutline: {
            active: {
                textColor: "#fff",
                borderColor: "#993029",
                bgColor: "#36171A",
            },
            disabled: {
                textColor: "#666",
                borderColor: "#2C1418",
                bgColor: "#36171A",
            },
        },
        primaryFilled: {
            active: {
                textColor: "#fff",
                borderColor: "#993029",
                bgColor: "#CD413A",
            },
            disabled: {
                textColor: "#666",
                borderColor: "#2C1418",
                bgColor: "#36171A",
            },
        },
        secondaryOutline: {
            active: {
                textColor: "#fff",
                borderColor: "#9B9D9F",
                bgColor: "#1D2228",
            },
            disabled: {
                textColor: "#666",
                borderColor: "#33363b",
                bgColor: "#1D2228",
            },
        },
        secondaryFilled: {
            active: {
                textColor: "#040910",
                borderColor: "#fff",
                bgColor: "#E6E6E7",
            },
            disabled: {
                textColor: "#686B70",
                borderColor: "transparent",
                bgColor: "#9B9D9F",
            },
        },
        info: {
            textColor: "#FF4F44",
            bgColor: "rgba(54, 178, 134, 0.2)",
        },
        primary: {
            textColor: "#fff",
            bgColor: "#226E57",
        },
        secondary: {
            textColor: "#fff",
            bgColor: "rgba(136, 136, 255, 0.5)",
        },
        disabled: {
            textColor: "#fff",
            bgColor: "#3CC695",
        },
        radio: {
            borderColor: "#FF4F44",
            bgColor: "rgba(255, 79, 68, 0.4)",
        },
    },
    gradients: {},
};
exports["default"] = baseTheme;
exports.maxLayoutWidth = baseTheme.space[3] * 5 + parseFloat(baseTheme.breakpoints[3]); // = 1232px


/***/ }),

/***/ "./src/Components/constant /constant.ts":
/*!**********************************************!*\
  !*** ./src/Components/constant /constant.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PASSWORD = exports.EMAIL_REGEX = void 0;
exports.EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
exports.PASSWORD = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


/***/ }),

/***/ "./src/Components/utils/index.ts":
/*!***************************************!*\
  !*** ./src/Components/utils/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ }),

/***/ "./src/context/UserContext.tsx":
/*!*************************************!*\
  !*** ./src/context/UserContext.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserContex = void 0;
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
exports.UserContex = (0, react_1.createContext)({
    user: null,
    totalBudget: [],
    userExpenseData: undefined,
    isLoading: true,
    updateData: () => { },
});


/***/ }),

/***/ "./src/context/UserProvider.tsx":
/*!**************************************!*\
  !*** ./src/context/UserProvider.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useCustomUser = void 0;
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const UserContext_1 = __webpack_require__(/*! ./UserContext */ "./src/context/UserContext.tsx");
const firebase_1 = __webpack_require__(/*! ../firebase */ "./src/firebase.ts");
const firestore_1 = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.cjs.js");
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
exports["default"] = UserProvider;


/***/ }),

/***/ "./src/firebase.ts":
/*!*************************!*\
  !*** ./src/firebase.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.auth = exports.db = void 0;
// Import the functions you need from the SDKs you need
const app_1 = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
const analytics_1 = __webpack_require__(/*! firebase/analytics */ "./node_modules/firebase/analytics/dist/index.cjs.js");
const auth_1 = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.cjs.js");
const firestore_1 = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.cjs.js");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMfjUpyIckXQG4WFX1xpIFuEI5z9wgSs4",
    authDomain: "login-auth-5b9a1.firebaseapp.com",
    projectId: "login-auth-5b9a1",
    storageBucket: "login-auth-5b9a1.appspot.com",
    messagingSenderId: "382339698580",
    appId: "1:382339698580:web:d1dd58a17672a1863ac981",
    measurementId: "G-BY4458NGEH",
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
const analytics = (0, analytics_1.getAnalytics)(app);
exports.db = (0, firestore_1.getFirestore)(app);
exports.auth = (0, auth_1.getAuth)();
exports["default"] = app;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const client_1 = __importDefault(__webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js"));
const App_1 = __importDefault(__webpack_require__(/*! ./App */ "./src/App.tsx"));
const UserProvider_1 = __importDefault(__webpack_require__(/*! ./context/UserProvider */ "./src/context/UserProvider.tsx"));
const root = client_1.default.createRoot(document.getElementById("root"));
root.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(UserProvider_1.default, { children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }) }));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkexpense_managment"] = self["webpackChunkexpense_managment"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-3c581d"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.00b46c6af37a1caf6ab1.js.map