import React from "react";
import { cls } from "../utils/utils";

interface ButtonProps {
  type: "primary" | "secondary" | "tertiary";
  //   size: "small" | "medium" | "large";
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { type, children } = props;
  return (
    <button
      className={cls(
        "px-8 py-2",
        type === "primary"
          ? "border-neutral-200 border bg-transparent text-neutral-200"
          : "bg-neutral-200 text-neutral-950"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
