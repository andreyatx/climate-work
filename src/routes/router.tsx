import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Root } from "./root";
import App from "../App";

export enum Paths {
  Home = '/',
  SignIn = '/sign-in',
  SignUp = '/sign-up',
}

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: Paths.Home,
        element: <App />,
      },
      {
        path: Paths.SignIn,
        element: <SignIn />,
      },
      {
        path: Paths.SignUp,
        element: <SignUp />,
      },
    ],
  },
]);