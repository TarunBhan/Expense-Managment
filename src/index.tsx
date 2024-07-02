import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserProvider from "./context/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <div style={{ width: "100vw", height: "100vh", background: "red" }}></div>
  // <React.StrictMode>
  //   <UserProvider>
  //     <App />
  //   </UserProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
