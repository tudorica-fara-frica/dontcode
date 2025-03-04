import CodeBox from "@/components/content";
import { getContentForUsername } from "@/lib/utils";
import { connection } from "next/server";

export default async function Content({ params }) {
  await connection();

  const { username } = await params;

  const content = (await getContentForUsername(username)) || "empty";

  return (
    <>
      <CodeBox content={content} username={username} />
    </>
  );
}
