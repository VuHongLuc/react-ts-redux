import React, { memo } from "react";
import "./Button.css";

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    content: string;
    bgrColor: string;
    height: string;
    width: string;
    onClick?: () => void;
};

function Button({
    type,
    content,
    bgrColor,
    height,
    width,
    onClick,
}: ButtonProps) {
    console.log("button",content,"render");
    return (
        <button
            type={type}
            className="myBytton"
            style={{ backgroundColor: bgrColor, height: height, width: width }}
            onClick={onClick}
        >
            {content}
        </button>
    );
}
export default memo(Button);
