"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const auth_1 = require("firebase/auth");
const react_1 = require("react");
const firebase_1 = require("../../firebase");
const UserContext_1 = require("../../context/UserContext");
const Home_1 = __importDefault(require("../Home/Home"));
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
exports.default = Layout;
