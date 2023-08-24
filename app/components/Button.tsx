import React from "react";
import { cls } from "../utils/utils";
import Link from "next/link";

interface ButtonProps {
  type: "primary" | "secondary" | "tertiary";
  //   size: "small" | "medium" | "large";
  children: React.ReactNode;
  url?: string;
  onClick?: () => void;
  className?: string;
  isPrivate?: boolean;
}

const Button = (props: ButtonProps) => {
  const { type, children, onClick, url, className, isPrivate } = props;
  return (
    <>
      {url ? (
        <Link href={url} target="_blank" referrerPolicy="no-referrer">
          <button
            className={cls(
              "px-8 py-2",
              type === "primary"
                ? "border-neutral-200 border-2 bg-transparent text-neutral-200"
                : "border-neutral-200 border-2 bg-neutral-200 text-neutral-900",
              isPrivate && "opacity-40",
              "hover:bg-purple-500 hover:text-neutral-200",
              className
            )}
            onClick={onClick}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          className={cls(
            "px-8 py-2",
            type === "primary"
              ? "border-neutral-200 border-2 bg-transparent text-neutral-200"
              : "border-neutral-200 border-2 bg-neutral-200 text-neutral-900",
            isPrivate && "opacity-40",
            "hover:bg-purple-500 hover:text-neutral-200",
            className
          )}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};
export default Button;
