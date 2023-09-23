import { cls, scrollToElement } from "../utils/utils";
import classes from "./styles/Logo.module.scss";
const Logo = () => {
  return (
    <div
      onClick={() => scrollToElement("home")}
      className="cursor-pointer flex flex-row items-center bg-neutral-900"
    >
      <p className="text-sm text-neutral-200">alex_jonny</p>
      <div
        className={cls(classes.logoBlock, "w-[10px] h-[20px] bg-neutral-200")}
      />
    </div>
  );
};

export default Logo;
