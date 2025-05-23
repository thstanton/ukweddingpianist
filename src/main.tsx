import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Complete from "./pages/Complete.tsx";
import { FormContextProvider } from "./contexts/FormContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/complete",
    element: <Complete />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FormContextProvider>
      <RouterProvider router={router} />
    </FormContextProvider>
  </React.StrictMode>,
);
