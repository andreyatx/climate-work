import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { Root } from "./root";
import { Orders } from "../pages/Orders";
import { Users } from "../pages/Users";
import { Customers } from "../pages/Customers";
import { Teams } from "../pages/Teams";
import { AuthRoutes } from "./AuthRoutes";
import { ProtectedRoutes } from "./ProtectedRoutes";

export enum Paths {
  Home = '/',
  SignIn = '/sign-in',
  SignUp = '/sign-up',
  Users = '/users',
  Orders = '/orders',
  Customers = '/customers',
  Teams = '/teams'
}

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: Paths.Home,
        element: <AuthRoutes />,
        children: [
          {
            path: Paths.SignIn,
            element: <SignIn />
          }
        ]
      },
      {
        path: Paths.Home,
        element: <ProtectedRoutes />,
        children: [
          {
            path: Paths.Users,
            element: <Users />
          },
          {
            path: Paths.Orders,
            element: <Orders />
          },
          {
            path: Paths.Customers,
            element: <Customers />
          },
          {
            path: Paths.Teams,
            element: <Teams />
          }
        ]
      },
    ],
  },
]);
