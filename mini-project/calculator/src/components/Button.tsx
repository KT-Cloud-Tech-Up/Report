interface ButtonProps {
  color: string;
  value: string;
  span: string;
  onClick: (value: string) => void;
}

export default function Button({ value, color, span, onClick }: ButtonProps) {
  const spanClass = span === "2" ? "col-span-2" : "col-span-1";
  const colorClass =
    color === "primary"
      ? "bg-gray-300"
      : color === "secondary"
      ? "bg-red-500"
      : "bg-green-300";

  return (
    <button
      className={`${spanClass} ${colorClass} focus:outline-none hover:scale-105 hover:shadow-lg transition duration-300 rounded-md h-full text-center items-center justify-center font-bold text-2xl`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
}
