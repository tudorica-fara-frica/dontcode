import CodeBox from "@/components/content";
import { getContentForUsername } from "@/lib/utils";
import { connection } from "next/server";
import { Toaster } from "react-hot-toast";

export default async function Content({ params }) {
  await connection();

  await new Promise((res) => setTimeout(res, 3 * 500));

  const { username } = await params;

  const content = (await getContentForUsername(username)) || "";

  return (
    <>
      <div>
        <Toaster />
      </div>
      <CodeBox content={content} username={username} />
    </>
  );
}
