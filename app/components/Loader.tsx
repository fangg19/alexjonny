interface LoaderProps {
  message?: string;
}

const Loader = (props: LoaderProps) => {
  return <div className="w-8 h-8 bg-purple-500 rounded-full animate-bounce" />;
};

export default Loader;
