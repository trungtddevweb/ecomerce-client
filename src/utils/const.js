import { getProductDetailAPI } from "@/api/main"
import { lazy } from "react"

export const clientId = import.meta.env.VITE_APP_CLIENTID_KEY
export const appID = import.meta.env.VITE_APP_APPID_FACEBOOK

// Routers
export const Error = lazy(() => import("@/pages/Error"))
export const Home = lazy(() => import("@/pages/Home"))
export const SignIn = lazy(() => import("@/pages/SignIn"))
export const SignUp = lazy(() => import("@/pages/SignUp"))
export const ProductDetail = lazy(() => import("@/pages/ProductDetail"))
export const Dashboard = lazy(() => import("@/pages/Dashboard"))

// Dashboard Routes
export const OverView = lazy(() => import("@/pages/Dashboard/Overview"))

// Paths
export const pathRoutes = {
    home: "/",
    productDetail: "products/:productId",
    signIn: "sign-in",
    signUp: "sign-up",
    dashboard: "dashboard",
    customer: "customer",
    order: "order",
    setting: "setting",
    voucher: "voucher",
    product: "product",
    store: "store",
}

// Loaders
// export const postLoader = async ({ params }) => {
//   const tagName = params.tagName
//   const post = await getPostByTagAPI(tagName)
//   return post
// }

// export const getRecentLoader = async () => {
//   const post = await getAllPostAPI()
//   return post
// }

// export const getTrendingLoader = async () => {
//   return await getPostTrendingAPI()
// }

export const getDetailProductLoader = async ({ params }) => {
    return await getProductDetailAPI(params.productId)
}
