import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayouts from "./Layouts/MainLayouts";
import Home from "./components/Home";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import CoffeeDetails from "./components/CoffeeDetails";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthProvider from "./Context/AuthProvider";
import Users from './components/Users';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      {
        path:'header',
        Component:Header,
      },
      {
        path: "addcoffee",
        Component: AddCoffee,
      },
      {
        path: "coffee/:id",
        Component: CoffeeDetails,
      },
      {
        path: "updatecoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path:'users',
        loader: ()=>fetch(`http://localhost:3000/users`),
        Component:Users,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
