import { createBrowserRouter } from "react-router-dom"

import AuthLayout from "@/layouts/AuthLayout"
import MainLayout from "@/layouts/MainLayout"
import NoHeaderLayout from "@/layouts/NoHeaderLayout"
import ProtectedLayout from "@/layouts/ProtectedLayout"
import EmptyLayout from "@/layouts/EmptyLayout"

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
    VerifyEmailOTP,
    VerifyPassOTP,
    Forgot,
    ChangePass,
    CheckOut,
    InfoOrder,
    PaymentMethods,
    getLocationLoader,
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
            {
                path: pathRoutes.collection,
                element: <div>all product</div>,
            },
        ],
    },
    {
        element: <AuthLayout />,
        errorElement: <Error />,
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
        element: <EmptyLayout />,
        children: [
            {
                path: pathRoutes.verifyEmailOTP,
                element: <VerifyEmailOTP />,
            },
            {
                path: pathRoutes.forgot,
                element: <Forgot />,
            },
            {
                path: pathRoutes.verifyPassOTP,
                element: <VerifyPassOTP />,
            },
            {
                path: pathRoutes.changePass,
                element: <ChangePass />,
            },
            {
                path: pathRoutes.checkOut,
                element: <CheckOut />,
                children: [
                    {
                        index: true,
                        path: pathRoutes.infoOrder,
                        element: <InfoOrder />,
                        loader: getLocationLoader,
                    },
                    {
                        path: pathRoutes.paymentMethods,
                        element: <PaymentMethods />,
                    },
                ],
            },
        ],
    },
    {
        element: <ProtectedLayout />,
        errorElement: <Error />,
        children: [
            {
                path: pathRoutes.cart,
                element: <Cart />,
            },
        ],
    },
    {
        element: <NoHeaderLayout />,
        errorElement: <Error />,
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
