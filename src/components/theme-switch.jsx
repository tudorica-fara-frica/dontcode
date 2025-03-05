"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  HiOutlineCursorArrowRays,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi2";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return <HiOutlineCursorArrowRays className="size-6 cursor-none" />;

  if (resolvedTheme === "dark") {
    return (
      <div
        className="p-3 h-full hover:border-sky-500 border border-transparent flex items-center justify-center transition-all rounded-full cursor-pointer hover:bg-sky-500/20"
        onClick={() => setTheme("light")}
      >
        <HiOutlineSun className="size-6" />
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div
        className="p-3 h-full hover:border-sky-500 border border-transparent flex items-center justify-center transition-all rounded-full cursor-pointer hover:bg-sky-500/20"
        onClick={() => setTheme("dark")}
      >
        <HiOutlineMoon className="size-6" />
      </div>
    );
  }
}
