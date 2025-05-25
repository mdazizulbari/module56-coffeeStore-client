import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://module56-coffee-store-server-two.vercel.app/coffees"),
        Component: Home,
      },
      {
        path: "coffee/:id",
        loader: () =>
          fetch("https://module56-coffee-store-server-two.vercel.app/coffees"),
        Component: CoffeeDetails,
      },
      { path: "addCoffee", Component: AddCoffee },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) =>
          fetch(
            `https://module56-coffee-store-server-two.vercel.app/coffees/${params.id}`
          ),
        Component: UpdateCoffee,
      },
      { path: "signin", Component: SignIn },
      { path: "signup", Component: SignUp },
      {
        path: "users",
        loader: () =>
          fetch("https://module56-coffee-store-server-two.vercel.app/users"),
        Component: Users,
      },
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
