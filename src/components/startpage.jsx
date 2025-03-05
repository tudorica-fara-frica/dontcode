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
    setUsername("");
    router.push(`/${username}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex sm:flex-row flex-col items-center h-full w-full gap-4"
    >
      <input
        type="text"
        placeholder="stop coding"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border h-full w-full min-h-12 sm:w-96 border-foreground rounded p-2 focus:outline-double focus:outline-4 focus:outline-offset-2 focus:outline-sky-500 text-sky-500"
      />
      <div className="flex flex-row items-center h-full justify-center gap-2">
        <Link
          className="inline-block h-full rounded bg-foreground text-background px-4 py-2 hover:bg-sky-500 hover:cursor-pointer transition-all place-content-center"
          href={`/${username}`}
        >
          Submit!
        </Link>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </form>
  );
}
