import React, { useState } from "react";
import baseTheme from "../Theme/baseTheme";
import { CustomButton, ProgressBar } from "./Budget.styles";

const ExpenseWidget = () => {
  const [expenseVal, setExpenseVal] = useState<boolean>(true);
  const color = baseTheme.colors.blue;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height: "150px",
        borderRadius: "12px",
        maxWidth: "450px",
        boxShadow: "rgba(27,187,195,0.5) -1px -2px 19px 3px",
        padding: "10px",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          border: "1px dashed black",
          padding: "10px",
          width: "100%",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <text
            style={{
              fontSize: baseTheme.fontSizes[3],
              color,
            }}
          >
            Coffee
          </text>
          <text style={{ fontSize: baseTheme.fontSizes[3], color }}>
            ₹200 Budget
          </text>
        </div>
        <div
          style={{
            width: "100%",
            background: baseTheme.colors.blacks[3],
            height: "15px",
            borderRadius: "12px",
            marginTop: "12px",
          }}
        >
          <ProgressBar width={"80%"} color={color} />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <text style={{ fontSize: baseTheme.fontSizes[1], color }}>
            Spent: ₹120
          </text>
          <text style={{ fontSize: baseTheme.fontSizes[1], color }}>
            Remaining: ₹80
          </text>
        </div>

        <CustomButton onClick={() => {}}>
          <text
            style={{
              fontSize: baseTheme.fontSizes[1],
              color: baseTheme.colors.white,
            }}
          >
            View Details
          </text>
        </CustomButton>
      </div>
    </div>
  );
};
export default ExpenseWidget;
