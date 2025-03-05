"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ThemeSwitch from "./theme-switch";
import Link from "next/link";

export default function Startpage() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/${username}`);
    setUsername("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row items-center h-full w-full gap-2"
    >
      <input
        type="text"
        placeholder="stop coding"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border min-w-64 border-foreground rounded p-2 w-full focus:outline-double focus:outline-4 focus:outline-offset-2 focus:outline-sky-500 text-sky-500"
      />
      {/* <button
        type="submit"
        className="h-full rounded bg-foreground text-background p-2 hover:bg-sky-500 hover:cursor-pointer transition-all"
      >
        Submit
      </button> */}
      <Link
        className="inline-block h-full rounded bg-foreground text-background p-2 hover:bg-sky-500 hover:cursor-pointer transition-all"
        href={`/${username}`}
      >
        Submit!
      </Link>
      <div className="px-2">
        <ThemeSwitch />
      </div>
    </form>
  );
}
