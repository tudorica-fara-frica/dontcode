"use server";

import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase/clientApp";

export async function getContentForUsername(username) {
  try {
    const docRef = doc(db, "dontcode", username);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().content;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Eroare la obtinerea continutului:", error);
    return null;
  }
}

export async function saveContentForUsername({ content, username }) {
  try {
    console.log("save");
    const docRef = doc(db, "dontcode", username);
    await setDoc(docRef, { content }, { merge: true });
  } catch (error) {
    console.error("saveContentForUsername", error);
  }
}
