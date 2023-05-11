"use client";

import { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export interface ThemeWrapperProps{
  children: ReactNode
}

const ThemeWrapper: FC<ThemeWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider theme={ theme }>
      { children }
    </ThemeProvider>
  );
};

export default ThemeWrapper;
