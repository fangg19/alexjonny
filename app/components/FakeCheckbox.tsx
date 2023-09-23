type FakeCheckboxProps = {
  isEmpty: boolean;
};

const FakeCheckbox = (props: FakeCheckboxProps) => {
  return (
    <>
      {!props.isEmpty ? (
        <div className="h-4 w-4 bg-transparent ring-2 ring-purple-500 relative">
          <div className="h-2 w-2 bg-purple-500 absolute top-1 left-1" />
        </div>
      ) : (
        <div className="h-4 w-4 bg-transparent ring-2 ring-neutral-200 relative" />
      )}
    </>
  );
};

export default FakeCheckbox;
