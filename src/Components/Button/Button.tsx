import { FC, MouseEventHandler } from "react";
import baseTheme from "../Theme/baseTheme";

const Button: FC<{
  buttonText: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonWidth?: string;
  disable?: boolean;
  loading?: boolean;
  bgColor: string;
  btnHeight?: string;
}> = ({
  onClick,
  buttonText,
  buttonWidth = "70%",
  disable = false,
  bgColor,
  loading = false,
  btnHeight = "35px",
}) => {
  return (
    <button
      style={{
        cursor: "pointer",
        height: btnHeight,
        width: buttonWidth,
        borderRadius: "12px",
        borderColor: "transparent",
        backgroundColor: disable ? "grey" : bgColor,
        color: baseTheme.colors.white,
      }}
      onClick={onClick}
      type="submit"
    >
      {loading ? (
        <div style={{ marginTop: "-20px" }}>
          <img
            src="https://assets.rario.com/RARIO/App/images/button/white_loader-1.gif"
            style={{ height: "70px", width: "70px" }}
          />
        </div>
      ) : (
        buttonText
      )}
    </button>
  );
};

export default Button;
