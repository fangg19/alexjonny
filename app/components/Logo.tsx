import { scrollToElement } from "../utils/utils";

const Logo = () => {
  return (
    <div
      onClick={() => scrollToElement("home")}
      className="cursor-pointer flex flex-col border-2 p-2 border-neutral-200 bg-neutral-900 w-14 h-14 items-start justify-center"
    >
      <p className="text-sm text-neutral-200">alex</p>
      <p className="text-sm text-neutral-200">jonny</p>
    </div>
  );
};

export default Logo;
