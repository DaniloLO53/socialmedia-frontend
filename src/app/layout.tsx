import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "../components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "POC NextJS - Chat App",
  description: "POC following Josh tutorial",
  referenceLink: "https://www.youtube.com/watch?v=NlXfg5Pxxh8"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
