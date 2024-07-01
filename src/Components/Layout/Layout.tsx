import { onAuthStateChanged } from "firebase/auth";
import { FC, useContext, useEffect } from "react";
import { auth } from "../../firebase";
import { UserContex } from "../../context/UserContext";
import baseTheme from "../Theme/baseTheme";
import BudgetWidget from "../Budget/BudgetWidget";
import ExpenseWidget from "../Budget/ExpenseWidget";

const Layout: FC = () => {
  const { user: userData } = useContext(UserContex);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is authenticated:", user);
      } else {
        window.location.href = "/auth";
      }
    });
    // Clean up the subscription
    return () => unsubscribe();
  }, []);

  useEffect(() => {}, []);

  return (
    <div
      id="asa"
      style={{
        display: "grid",
        width: "100%",
        marginInline: "auto",

        placeItems: "start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <BudgetWidget />

        <ExpenseWidget />
      </div>
    </div>
  );
};
export default Layout;
