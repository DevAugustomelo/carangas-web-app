




import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Car from "./pages/car/Car";
import Catalogo from "./pages/catalogo/Catalogo";
import NewCar from "./pages/new-car/NewCar";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/car", element: <Car /> },
  { path: "/car/:id", element: <Car /> },
  { path: "/catalogo", element: <Catalogo /> },
  { path: "/catalogo/car/:id", element: <Car /> },
  { path: "/novo-carro", element: <NewCar /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

