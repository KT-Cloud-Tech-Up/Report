interface ButtonProps {
  label: string;
  color: string;
}

function Button({ label, color }: ButtonProps) {
  const bgColor = color;
  return (
    <div>
      <button
        className={`${bgColor}-500 text-white focus:outline-none hover:${bgColor}-600`}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
