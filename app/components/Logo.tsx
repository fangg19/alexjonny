import Link from "next/link";
import { cls } from "../utils/utils";

const Logo = () => {
  return (
    <Link href="/" className="cursor-pointer flex flex-row items-center">
      <p className="text-sm text-neutral-200">alex_jonny</p>
      <div className="flex flex-row animate-logoMoveToRight relative">
        <div className="w-[10px] h-[20px] bg-neutral-200 absolute left-0 animate-logoPulse" />
        <div className="h-[20px] bg-neutral-900 animate-logoHideAfterMove" />
      </div>
    </Link>
  );
};

export default Logo;
