type FakeCheckboxProps = {
  isEmpty: boolean;
};

const FakeCheckbox = (props: FakeCheckboxProps) => {
  const randomColors: string[] = [
    "red-500",
    "yellow-500",
    "green-500",
    "blue-500",
    "indigo-500",
    "purple-500",
    "pink-500",
  ];

  const randomColor =
    randomColors[Math.floor(Math.random() * randomColors.length)];

  return (
    <>
      {!props.isEmpty ? (
        <div
          className={`h-4 w-4 bg-transparent ring-2 ring-${
            randomColor ?? "purple-500"
          } relative`}
        >
          <div
            className={`h-2 w-2 bg-${
              randomColor ?? "purple-500"
            } absolute top-1 left-1`}
          />
        </div>
      ) : (
        <div className="h-4 w-4 bg-transparent ring-2 ring-neutral-200 relative" />
      )}
    </>
  );
};

export default FakeCheckbox;
