import { createBrowserRouter } from "react-router-dom"

import AuthLayout from "@/layouts/AuthLayout"
import MainLayout from "@/layouts/MainLayout"
import NoHeaderLayout from "@/layouts/NoHeaderLayout"
import ProtectedLayout from "@/layouts/ProtectedLayout"

import {
    Error,
    Home,
    SignIn,
    SignUp,
    ProductDetail,
    getDetailProductLoader,
    pathRoutes,
    Dashboard,
    OverView,
    Cart,
    getCartLoader,
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
                path: pathRoutes.cart,
                element: <Cart />,
                loader: getCartLoader,
            },
        ],
    },
    {
        element: <NoHeaderLayout />,
        children: [
            {
                path: pathRoutes.dashboard,
                element: <Dashboard />,
                children: [
                    {
                        index: true,
                        element: <OverView />,
                    },
                    {
                        path: pathRoutes.customer,
                        element: <div>User Controller</div>,
                    },
                    {
                        path: pathRoutes.order,
                        element: <div>Order Controller</div>,
                    },
                    {
                        path: pathRoutes.store,
                        element: <div>Store Controller</div>,
                    },
                    {
                        path: pathRoutes.product,
                        element: <div>Product Controller</div>,
                    },
                    {
                        path: pathRoutes.voucher,
                        element: <div>Voucher Controller</div>,
                    },
                    {
                        path: pathRoutes.setting,
                        element: <div>Setting Controller</div>,
                    },
                ],
            },
        ],
    },
])

export default router
