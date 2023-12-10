import { getCartAPI, getLocationAPI, getProductDetailAPI } from "@/api/main"
import { lazy } from "react"

export const clientId = import.meta.env.VITE_APP_CLIENTID_KEY
export const appID = import.meta.env.VITE_APP_APPID_FACEBOOK
export const locationUrl = import.meta.env.VITE_APP_LOCATION_URL
// Routers
export const Error = lazy(() => import("@/pages/Error"))
export const Home = lazy(() => import("@/pages/Home"))
export const SignIn = lazy(() => import("@/pages/SignIn"))
export const SignUp = lazy(() => import("@/pages/SignUp"))
export const ProductDetail = lazy(() => import("@/pages/ProductDetail"))
export const Dashboard = lazy(() => import("@/pages/Dashboard"))
export const Cart = lazy(() => import("@/pages/Cart"))

// Check Out
export const CheckOut = lazy(() => import("@/pages/CheckOut"))
export const InfoOrder = lazy(() => import("@/pages/CheckOut/InfoOrder"))
export const PaymentMethods = lazy(() =>
    import("@/pages/CheckOut/PaymentMethods"),
)
export const OrderSuccess = lazy(() => import("@/pages/CheckOut/OrderSuccess"))

export const VerifyEmailOTP = lazy(() => import("@/pages/VerifyEmailOTP"))
export const VerifyPassOTP = lazy(() => import("@/pages/VerifyPassOTP"))
export const Forgot = lazy(() => import("@/pages/Forgot"))
export const ChangePass = lazy(() => import("@/pages/ChangePass"))
// Dashboard Routes
export const OverView = lazy(() => import("@/pages/Dashboard/Overview"))

// Paths
export const pathRoutes = {
    home: "/",
    productDetail: "products/:productId",
    signIn: "sign-in",
    signUp: "sign-up",
    dashboard: "dashboard",
    order: "order",
    customer: "customer",
    checkOut: "check-out",
    infoOrder: "info-order",
    paymentMethods: "payment-method",
    setting: "setting",
    voucher: "voucher",
    product: "product",
    store: "store",
    cart: "cart",
    verifyEmailOTP: "verify-email",
    verifyPassOTP: "verify-password",
    forgot: "forgot-password",
    changePass: "change-password",
    collection: "collection/all",
    orderSuccess: "order-success/:orderCode",
}

// Loaders
export const getDetailProductLoader = async ({ params }) => {
    return await getProductDetailAPI(params.productId)
}

export const getCartLoader = async () => {
    return await getCartAPI()
}

export const getLocationLoader = async () => {
    return await getLocationAPI()
}
