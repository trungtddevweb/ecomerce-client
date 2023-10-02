import { createBrowserRouter } from "react-router-dom"

import AuthLayout from "@/layouts/AuthLayout"
import MainLayout from "@/layouts/MainLayout"
import ProtectedLayout from "@/layouts/ProtectedLayout"
import NoHeaderLayout from "@/layouts/NoHeaderLayout"

import {
    Error,
    Home,
    SignIn,
    SignUp,
    ProductDetail,
    getDetailProductLoader,
    pathRoutes,
    Dashboard,
} from "./const"

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
                element: <ProductDetail />,
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
                path: "dashboard",
                element: <Dashboard />,
                loader: checkAdminLoader,
            },
        ],
    },
])

export default router
