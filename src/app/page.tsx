import { FC, HTMLAttributes } from "react";

export interface HomeProps extends HTMLAttributes<HTMLDivElement>{
  generic?: string
}

const Home: FC<HomeProps> = ({
  children,
  ...props
}) => {
  return (
    <div>
      hello
    </div>
  );
};

export default Home;
