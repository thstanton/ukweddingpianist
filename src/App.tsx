import Form from "./components/Form";
import Header from "./components/Header";
import { useEffect } from "react";
import { useForm } from "./hooks/useForm";

export default function App() {
  const origin = window.location.origin;
  console.log("Origin: ", origin);
  const { setTheme } = useForm();

  useEffect(() => {
    const root = document.documentElement;
    const __UKWEDDINGPIANIST_URL__ = import.meta.env.VITE_UKWEDDINGPIANIST_URL;
    console.log(__UKWEDDINGPIANIST_URL__);
    const __MARYLEBONEDUO_URL__ = import.meta.env.VITE_MARYLEBONEDUO_URL;

    switch (origin) {
      case __UKWEDDINGPIANIST_URL__:
        root.setAttribute("data-theme", "ukwp");
        setTheme("UkWeddingPianist");
        console.log("Theme: UkWeddingPianist");
        break;
      case __MARYLEBONEDUO_URL__:
        root.setAttribute("data-theme", "cupcake");
        setTheme("MaryleboneDuo");
        break;
    }
  }, [origin, setTheme]);

  return (
    <main className="bg-base-100">
      <div className="px-4 md:px-10 pt-3 pb-8">
        <Header />
        <Form />
      </div>
    </main>
  );
}
