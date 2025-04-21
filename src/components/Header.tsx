export default function Header() {
  return (
    <div className="flex items-center gap-8 py-6">
      <img src="/mr.svg" className="mb-3 w-24" />
      <div className="mb-3 flex flex-col justify-center">
        <h1 className="text-4xl font-display">UK Wedding Pianist</h1>
        <h2 className="font-serif text-2xl">Song Selection Form</h2>
      </div>
    </div>
  );
}
