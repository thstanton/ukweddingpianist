import Form from "./components/Form";

export default function App() {
  return (
    <main className="mx-10 mt-3">
      <div className="flex items-center gap-2">
        <img src="/mr.svg" className="mb-3 w-16" />
        <div className="mb-3 flex flex-col justify-center">
          <h1 className="text-4xl">UK Wedding Pianist</h1>
          <h2>Song Selection Form</h2>
        </div>
      </div>
      <Form />
    </main>
  );
}
