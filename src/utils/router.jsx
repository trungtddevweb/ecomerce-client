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
    OrderSuccess,
    Collection,
    UserAccount,
    UserController,
    OrderController,
    ProductController,
    VoucherController,
    StoreController,
    Search,
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
                element: <Collection />,
            },
            {
                path: pathRoutes.search,
                element: <Search />,
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
                path: pathRoutes.orderSuccess,
                element: <OrderSuccess />,
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
            {
                path: pathRoutes.userAccount,
                element: <UserAccount />,
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
                        element: <UserController />,
                    },
                    {
                        path: pathRoutes.order,
                        element: <OrderController />,
                    },
                    {
                        path: pathRoutes.store,
                        element: <StoreController />,
                    },
                    {
                        path: pathRoutes.product,
                        element: <ProductController />,
                    },
                    {
                        path: pathRoutes.voucher,
                        element: <VoucherController />,
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
