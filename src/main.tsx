import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import { HelmetProvider } from "react-helmet-async";
import OtherPage from "./pages/OtherPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "counter", element: <Counter /> },
  { path: "/:id", element: <OtherPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
