import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./styles/index.scss";
import MovieDetails from "./components/MovieDetails";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
