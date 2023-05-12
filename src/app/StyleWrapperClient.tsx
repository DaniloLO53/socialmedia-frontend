"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../components/themes/DefaultTheme";
import { GlobalStyle } from "../components/themes/GlobalStyle";

function StyleWrapperClient({ children }: {children: React.ReactNode}) {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <GlobalStyle />
      { children }
    </ThemeProvider>
  );
}
export default StyleWrapperClient;
