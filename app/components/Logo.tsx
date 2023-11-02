import Link from "next/link";
import { cls } from "../utils/utils";
import classes from "./styles/Logo.module.scss";

const Logo = () => {
  return (
    <Link href="/" className="cursor-pointer flex flex-row items-center">
      <p className="text-sm text-neutral-200">alex_jonny</p>
      <div className="flex flex-row animate-moveToRight relative">
        <div
          className={cls(
            classes.logoBlock,
            "w-[10px] h-[20px] bg-neutral-200 absolute left-0"
          )}
        />
        <div className="h-[20px] bg-neutral-900 animate-hideAfterMove" />
      </div>
    </Link>
  );
};

export default Logo;
