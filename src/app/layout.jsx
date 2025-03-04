import { Danfo, Comfortaa } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`antialiased h-screen w-screen flex flex-col items-center justify-center overflow-hidden ${comforta.className}`}
      >
        {children}
      </body>
    </html>
  );
}
