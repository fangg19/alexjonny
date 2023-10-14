import Link from "next/link";
import { cls } from "../utils/utils";
import classes from "./styles/Logo.module.scss";

const Logo = () => {
  return (
    <Link href="/" className="cursor-pointer flex flex-row items-center">
      <p className="text-sm text-neutral-200">alex_jonny</p>
      <div
        className={cls(classes.logoBlock, "w-[10px] h-[20px] bg-neutral-200")}
      />
    </Link>
  );
};

export default Logo;
