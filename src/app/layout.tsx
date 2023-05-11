import { Inter } from "next/font/google";
import { StyledResets } from "../styles";
import ThemeWrapper from "../styles/themeWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Socialmedia",
  description: "Socialmedia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <StyledResets />
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
