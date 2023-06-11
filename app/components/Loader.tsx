import React from "react";

interface LoaderProps {
  message: string;
}

const Loader = (props: LoaderProps) => {
  const { message } = props;
  return <div>{message}</div>;
};

export default Loader;
