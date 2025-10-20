import type { FC } from "react";

type HomeProps = {
  title: string;
};

const Home: FC<HomeProps> = ({ title }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">{title}</div>
  );
};

export default Home;
