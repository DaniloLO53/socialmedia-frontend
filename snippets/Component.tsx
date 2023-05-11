"use client";

import { FC, HTMLAttributes, ReactNode } from "react";

export interface ComponentProps extends HTMLAttributes<HTMLElement>{
  children: ReactNode
}

const Component: FC<ComponentProps> = ({
  children,
  ...props
}) => {
  return (
    <div>
      hello
    </div>
  );
};

export default Component;
