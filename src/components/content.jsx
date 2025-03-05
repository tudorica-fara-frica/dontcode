"use client";

import { saveContentForUsername } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import ThemeSwitch from "./theme-switch";

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

  function handleKeyDown(e) {
    if (e.key === "Tab") {
      e.preventDefault();

      const { selectionStart, selectionEnd } = e.target;
      const newText =
        contentCopy.substring(0, selectionStart) +
        "\t" +
        contentCopy.substring(selectionEnd);

      setContentCopy(newText);

      const newCursorPosition = selectionStart + 1;
      e.target.setSelectionRange(newCursorPosition, newCursorPosition);
    }
  }

  return (
    <div className="h-full w-full flex flex-col gap-0 items-center justify-center">
      <div className="w-full flex flex-row justify-between p-2 bg-sky-500 text-foreground items-center">
        <p className="tracking-widest font-extrabold">{username} :)</p>
        <div className="flex flex-row items-center justify-center gap-2">
          <ThemeSwitch />
          <button
            type="button"
            onClick={handleSave}
            className="bg-white rounded text-sky-950 hover:bg-sky-200 font-extrabold py-2 px-4 transition-all"
          >
            ctrl + s
          </button>
        </div>
      </div>
      <div className="p-2 size-full">
        <textarea
          className="border border-foreground text-sm bg-transparent rounded-lg p-2 w-full h-full resize-none focus:outline-2 focus:outline-dashed focus:outline-offset-2 focus:outline-sky-500"
          value={contentCopy}
          onKeyDown={handleKeyDown}
          spellCheck="false"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
