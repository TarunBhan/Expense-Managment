import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Auth/Login";
import React, { useContext, useEffect } from "react";
import Register from "./Components/Auth/Register";
import UserProvider from "./context/UserProvider";
import { UserContex } from "./context/UserContext";
import Header from "./Components/Header/Header";

function App() {
  const { user, isLoading } = useContext(UserContex);

  useEffect(() => {
    console.log("hey", user);
  }, [user]);
  console.log({ isLoading });

  if (isLoading) {
    return (
      <div>
        <text> Loader</text>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        minHeight: "100vh",
        gridTemplateRows: "auto 1fr auto",
        gap: "var(--space-lg)",
      }}
    >
      <Header />
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route
            path={user ? "/" : "/auth"}
            element={user ? <Layout /> : <Login />}
            index
          />
          <Route path="/" element={<Layout />} />
          <Route path="/:path" element={<Layout />} />
          <Route path="/auth" element={<Login />} />

          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </BrowserRouter>
      <img
        src="https://codinginpublic.dev/projects/react-router-budget-app/assets/wave-47c58563.svg"
        style={{
          width: "100%",
          display: "block",
        }}
      />
    </div>
  );
}

export default App;
