import type { MDXComponents } from "mdx/types";
import classes from "./app/styles/mdClasses.module.scss";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  // const headerStyles = {
  //   marginBottom: "1rem",
  //   fontSize: "21px",
  //   lineHeight: "1.75rem",
  //   fontWeight: "bold",
  //   backgroundColor: "#E5E5E5",
  //   color: "#171717",
  //   padding: "5px",
  //   width: "100%",
  // };

  // const linkStyles = {
  //   ...headerStyles,
  //   cursor: "pointer",
  //   textUnderlineOffset: "0.2rem",
  //   textDecoration: "underline",
  //   textAlign: "left" as const,
  //   display: "block",
  // };

  // const liStyles = {
  //   marginBottom: "0.2rem",
  //   paddingLeft: "1rem",
  // };
  // const ulStyles = {
  //   marginBottom: "1rem",
  // };

  // const paragraphStyles = {
  //   textAlign: "justify" as const,
  // };

  return {
    p: ({ children }) => <p className={classes.paragraphStyles}>{children}</p>,
    h1: ({ children }) => <h1 className={classes.headerStyles}>{children}</h1>,
    h2: ({ children }) => <h2 className={classes.headerStyles}>{children}</h2>,
    h3: ({ children }) => <h3 className={classes.headerStyles}>{children}</h3>,
    ul: ({ children }) => <ul className={classes.ulStyles}>{children}</ul>,
    li: ({ children }) => (
      <li className={classes.liStyles}>&raquo; {children}</li>
    ),
    a: (props) => {
      return (
        <a
          className={classes.linkStyles}
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      );
    },

    ...components,
  };
}
