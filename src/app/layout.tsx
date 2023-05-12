import { Inter } from "next/font/google";
import ThemeWrapper from "./StyleWrapperClient";

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
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
