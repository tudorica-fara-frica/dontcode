"use client";

import { saveContentForUsername } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export default function CodeBox({ content, username }) {
  const [contentCopy, setContentCopy] = useState(content);
  const timerRef = useRef(null);

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
  });

  async function handleChange(e) {
    setContentCopy(e.target.value);
  }

  async function handleSave() {
    try {
      await saveContentForUsername({ content: contentCopy, username });
      console.log("Content saved Successfully!");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <div>
        <p>{username}</p>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </div>
      <input type="textarea" value={contentCopy} onChange={handleChange} />
    </>
  );
}
