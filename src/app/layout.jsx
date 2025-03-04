import { Danfo, Comfortaa } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/theme-provider";

export const danfo = Danfo({
  subsets: ["latin"],
});

export const comforta = Comfortaa({
  subsets: ["latin"],
});

export const metadata = {
  title: "dontcode",
  description: "save your code with Dontcode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased select-none h-screen w-screen flex flex-col items-center justify-center overflow-hidden ${comforta.className}`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
