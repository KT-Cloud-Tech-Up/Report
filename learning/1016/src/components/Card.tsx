interface CardProps {
  icon: string;
  title: string;
  description: string;
}

function Card({ icon, title, description }: CardProps) {
  return (
    <div className="text-center px-2 w-1/3 hover:scale-105 transition-all duration-300">
      <div className="flex flex-col items-center justify-center border-2 rounded-lg border-black p-7">
        <div className="text-4xl mb-6">{icon}</div>
        <h4 className="text-xl font-bold">{title}</h4>
        <h5 className="text-lg font-semibold text-gray-500 mb-2">
          {description}
        </h5>
      </div>
    </div>
  );
}

export default Card;
