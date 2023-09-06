import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Paths, Root } from "./root";
import App from "../App";
import { Orders } from "../pages/Orders";
import { Users } from "../pages/Users";



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
      {
        path: Paths.Users,
        element: <Users />
      },
      {
        path: Paths.Orders,
        element: <Orders />
      }
    ],
  },
]);