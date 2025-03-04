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
      <HiOutlineSun
        className="size-6 cursor-pointer"
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <HiOutlineMoon
        className="size-6 cursor-pointer"
        onClick={() => setTheme("dark")}
      />
    );
  }
}
