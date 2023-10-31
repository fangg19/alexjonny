import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const headerStyles = {
    marginBottom: "0.2rem",
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    fontWeight: "bold",
  };

  const linkStyles = {
    ...headerStyles,
    cursor: "pointer",
    textUnderlineOffset: "0.2rem",
    textDecoration: "underline",
  };

  const listItemStyles = {
    marginBottom: "0.2rem",
    paddingLeft: "1rem",
  };
  const ulStyles = {
    marginBottom: "1rem",
  };

  return {
    h3: ({ children }) => <h3 style={headerStyles}>{children}</h3>,
    ul: ({ children }) => <ul style={ulStyles}>{children}</ul>,
    li: ({ children }) => <li style={listItemStyles}>&raquo; {children}</li>,
    a: (props) => {
      console.log(props);
      return (
        <a
          style={linkStyles}
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
