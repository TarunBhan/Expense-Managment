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
const auth_1 = require("firebase/auth");
const firebase_1 = require("../../firebase");
const Input_1 = __importDefault(require("../Input/Input"));
const Button_1 = __importDefault(require("../Button/Button"));
const baseTheme_1 = __importDefault(require("../Theme/baseTheme"));
const react_hook_form_1 = require("react-hook-form");
const constant_1 = require("../constant /constant");
require("./Form.css");
const Register_1 = __importDefault(require("./Register"));
const react_router_dom_1 = require("react-router-dom");
const UserContext_1 = require("../../context/UserContext");
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
                    }, children: (0, jsx_runtime_1.jsx)("img", { src: require("../../Assets/Images/Expense_bg.jpg"), alt: "Expense Image", width: "90%", height: "100%" }) })] }) }));
};
exports.default = Login;
