"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Startpage() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    try {
      router.push(`/${username}`);
      setUsername("");
    } catch (error) {
      console.error(error);
      router.refresh();
    }
  }

  return (
    <>
      <div>Enter your name</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
