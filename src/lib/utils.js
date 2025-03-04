"use server";

import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase/clientApp";

export async function getContentForUsername(username) {
  try {
    console.log(username);

    const docRef = doc(db, "dontcode", username);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().content;
    } else {
      console.log("Documentul nu exista");
      return null;
    }
  } catch (error) {
    console.log("Eroare la obtinerea continutului:", error);
    return null;
  }
}

export async function saveContentForUsername({ content, username }) {
  try {
    console.log(content, ", for", username);

    const docRef = doc(db, "dontcode", username);

    await setDoc(docRef, { content }, { merge: true });
  } catch (error) {
    console.error("saveContentForUsername", error);
  }
}
