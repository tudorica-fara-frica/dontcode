"use client";

import { saveContentForUsername } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export default function CodeBox({ content, username }) {
  const [contentCopy, setContentCopy] = useState(content);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
        handleSave();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      handleSave();
    }, 3000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [contentCopy]);

  async function handleChange(e) {
    setContentCopy(e.target.value);
  }

  async function handleSave() {
    try {
      await saveContentForUsername({ content: contentCopy, username });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="h-full w-full flex flex-col gap-0 items-center justify-center">
      <div className="w-full flex flex-row justify-between p-2 bg-sky-500 text-white items-center">
        <p className="tracking-widest font-extrabold">{username} :)</p>
        <button
          type="button"
          onClick={handleSave}
          className="bg-white rounded text-sky-950 hover:bg-sky-200 font-extrabold py-2 px-4 transition-all"
        >
          ctrl + s
        </button>
      </div>
      <div className="p-2 size-full">
        <textarea
          className="border border-white rounded-lg p-2 w-full h-full resize-none focus:outline-2 focus:outline-dashed focus:outline-offset-2 focus:outline-sky-500"
          value={contentCopy}
          spellCheck="false"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
