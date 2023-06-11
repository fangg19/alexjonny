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
}

const Button = (props: ButtonProps) => {
  const { type, children, onClick, url, className } = props;
  return (
    <div>
      {url ? (
        <Link href={url} target="_blank" referrerPolicy="no-referrer">
          <button
            className={cls(
              "px-8 py-2",
              type === "primary"
                ? "border-neutral-200 border bg-transparent text-neutral-200"
                : "bg-neutral-200 text-neutral-950",
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
              ? "border-neutral-200 border bg-transparent text-neutral-200"
              : "bg-neutral-200 text-neutral-950",
            className
          )}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </div>
  );
};
export default Button;
