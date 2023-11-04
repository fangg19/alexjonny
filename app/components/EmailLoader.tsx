interface LoaderProps {
  message?: string;
}

const EmailLoader = (props: LoaderProps) => {
  return (
    <div className="w-8 h-8 bg-primary-accent rounded-full animate-bounce" />
  );
};

export default EmailLoader;
