const Label = ({ color, name }: { color: string; name: string }) => {
  return (
    <div
      className="rounded p-[4px] inline-flex font-normal text-xs dark:text-black m-1"
      style={{ backgroundColor: color }}
    >
      {name}
    </div>
  );
};
export default Label;
