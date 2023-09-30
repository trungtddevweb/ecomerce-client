import { createBrowserRouter } from "react-router-dom"

import AuthLayout from "@/layouts/AuthLayout"
import MainLayout from "@/layouts/MainLayout"
import ProtectedLayout from "@/layouts/ProtectedLayout"

import {
  Error,
  Home,
  SignIn,
  SignUp,
  getDetailProductLoader,
  pathRoutes,
} from "./const"
import NoHeaderLayout from "@/layouts/NoHeaderLayout"
import ProductDettail from "@/pages/ProductDetail/ProductDetail"

const router = createBrowserRouter([
  {
    path: pathRoutes.home,
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: pathRoutes.productDetail,
        element: <ProductDettail />,
        loader: getDetailProductLoader,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: pathRoutes.signUp,
        element: <SignUp />,
      },
      {
        path: pathRoutes.signIn,
        element: <SignIn />,
      },
    ],
  },
  {
    element: <ProtectedLayout />,
    children: [
      {
        path: "manager/:username",
        element: <div>Setting</div>,
      },
    ],
  },
  {
    element: <NoHeaderLayout />,
    children: [
      {
        path: "settings",
        element: <div>Page</div>,
      },
    ],
  },
])

export default router
