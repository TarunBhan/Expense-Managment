import { MouseEvent, useContext } from "react";
import Button from "../Button/Button";
import baseTheme from "../Theme/baseTheme";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  arrayUnion,
  setDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
import { UserContex } from "../../context/UserContext";

const BudgetWidget = () => {
  console.log("new");
  const { user } = useContext(UserContex);
  const budget = "Red";
  const handleBudget = async () => {
    const expenseDocRef = doc(
      db,
      `users/BE4VYqOT0dbyWbtSrZZXdsNH2CZ2/budgets/${budget}`
    );
    try {
      await setDoc(
        expenseDocRef,
        {
          budgetValue: 100,
          expenses: arrayUnion({
            name: "This SIde",
            valie: 10,
            key: Math.floor(Math.random() * (999 - 100 + 1) + 100),
          }),
        },
        { merge: true }
      );

      // const dataRef = await addDoc(
      //   collection(db, "users/BE4VYqOT0dbyWbtSrZZXdsNH2CZ2/Expenses"),
      //   { data: { budgets: "Hey There", expense: [{ kurkire: 10 }] } }
      // );
    } catch (e) {
      console.log(e);
    }
  };
  //Delete Budget
  const DeleteBudget = async () => {
    const budget = "Alchoal";
    const expenseDocRef = doc(
      db,
      `users/BE4VYqOT0dbyWbtSrZZXdsNH2CZ2/Expenses/budgets`,
      `${budget}`
    );
    await deleteDoc(expenseDocRef);
  };

  //Delete Expense
  const DeleteExpense = async () => {
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

    const updatedExpenses = t[1].data?.expenses?.filter(
      (item) => item?.key !== key
    );
  };

  //GetBudget
  const getBudgetData = async () => {
    try {
      let index = 0;
      let temp: any[] = [];

      const collectionRef = collection(
        db,
        "/users/BE4VYqOT0dbyWbtSrZZXdsNH2CZ2/budgets"
      );
      const querySnapshot = await getDocs(collectionRef);
      console.log(
        querySnapshot.docs?.forEach((item) => {
          temp.push({
            budgetName: item?.id,
            expenses: item?.data(),
          });
        })
      );
      console.log({ temp });
      // setBudgetData(temp);
    } catch (e) {
      console.log("error>>>", e);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        maxWidth: "450px",
        height: "150px",
        borderRadius: "10px",
        justifyContent: "center",
        padding: "10px",
        backgroundColor: "white",
        alignItems: "center",
        boxShadow: "rgba(0, 0, 0, 0.2) -1px -2px 19px 3px",
      }}
    >
      <div
        style={{
          border: "1px dashed black",
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          minWidth: "300px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <span> Create Budget</span>
          <text
            style={{
              fontFamily: baseTheme.fonts.secondary,
              fontSize: baseTheme.fontSizes[0],
              marginBottom: "5px",
            }}
          >
            BudgetName
          </text>
          <input
            type="text"
            placeholder="Budget Name"
            style={{
              width: "80%",
              fontSize: baseTheme.fontSizes[0],
              marginBottom: "5px",
            }}
          />
          <text
            style={{
              fontFamily: baseTheme.fonts.secondary,
              fontSize: baseTheme.fontSizes[0],
              marginBottom: "5px",
            }}
          >
            Amount
          </text>
          <input
            type="text"
            placeholder="$250,$20"
            style={{
              width: "80%",
              fontSize: baseTheme.fontSizes[0],
              marginBottom: "15px",
            }}
          />
          <Button
            buttonText="Create Budget"
            onClick={DeleteExpense}
            bgColor={baseTheme.colors.signalGreen}
            btnHeight="25px"
          />
        </div>
      </div>
    </div>
  );
};

export default BudgetWidget;
