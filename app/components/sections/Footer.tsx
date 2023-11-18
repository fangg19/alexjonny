import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-row h-24 bg-neutral-900 items-center justify-center w-full border-neutral-800 border-t-2">
      <p>
        © {year} -{" "}
        <a href="/" target="_blank" rel="noopener noreferrer">
          alexjonny
        </a>
      </p>
    </footer>
  );
};

export default Footer;
