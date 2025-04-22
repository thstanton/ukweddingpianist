export default function Header() {
  return (
    <div className="flex items-center gap-4 md:gap-8 py-2 md:py-6">
      <img src="/mr.png" className="mb-3 w-20 md:w-24" />
      <div className="mb-3 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-display">
          UK Wedding Pianist
        </h1>
        <h2 className="font-serif text-2xl text-stone-400">
          Song Selection Form
        </h2>
      </div>
    </div>
  );
}
