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
const auth_1 = require("firebase/auth");
const react_1 = require("react");
const firebase_1 = require("../../firebase");
const firestore_1 = require("firebase/firestore");
const baseTheme_1 = __importDefault(require("../Theme/baseTheme"));
const Button_1 = __importDefault(require("../Button/Button"));
const Input_1 = __importDefault(require("../Input/Input"));
const constant_1 = require("../constant /constant");
const react_hook_form_1 = require("react-hook-form");
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
exports.default = Register;
