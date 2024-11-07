import React from "react";
import "./Button.css";

type ButtonProps = {
  content: string,
  bgrColor: string,
  height: string,
  width: string,
  onClick: ()=> void,
};

export default function Button({
  content,
  bgrColor,
  height,
  width,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      className="myBytton"
      style={{ backgroundColor: bgrColor, height: height, width: width }}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
