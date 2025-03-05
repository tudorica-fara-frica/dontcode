import Startpage from "@/components/startpage";
import { danfo } from "./layout";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-start">
      <h1 className={`text-7xl ${danfo.className}`}>
        dont<span className="text-sky-500 text-5xl">code</span>
      </h1>
      <Startpage />
    </div>
  );
}
