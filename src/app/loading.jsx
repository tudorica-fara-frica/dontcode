export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center size-full">
      <p>Loading...</p>
      <div className="flex h-16 items-center justify-center rotate-90">
        <span className="loader"></span>
      </div>
      <p className="text-lg text-sky-500">Please stop coding</p>
    </div>
  );
}
