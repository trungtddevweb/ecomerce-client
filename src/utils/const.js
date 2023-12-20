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
export const Collection = lazy(() => import("@/pages/Collection"))

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
export const OrderController = lazy(() =>
    import("@/pages/Dashboard/OrderController"),
)
export const ProductController = lazy(() =>
    import("@/pages/Dashboard/ProductController"),
)
export const UserController = lazy(() =>
    import("@/pages/Dashboard/UserController"),
)
export const VoucherController = lazy(() =>
    import("@/pages/Dashboard/VoucherController"),
)
export const StoreController = lazy(() =>
    import("@/pages/Dashboard/StoreController"),
)

// User
export const UserAccount = lazy(() => import("@/pages/UserAccount"))
export const AccountSetting = lazy(() =>
    import("@/pages/UserAccount/AccountSetting"),
)
export const AccountOrder = lazy(() =>
    import("@/pages/UserAccount/AccountOrder"),
)

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
    userAccount: "user",
    accountSetting: "?tab=setting",
    accountOrder: "?tab=setting",
}

export const listOptionsFilter = [
    {
        value: "ao",
        label: "Áo",
    },
    {
        value: "quan",
        label: "Quần",
    },
    {
        value: "vay",
        label: "Váy",
    },
    {
        value: "dam",
        label: "Đầm",
    },
]

export const listPriceFilter = [
    {
        value: 100000,
        label: "Nhỏ hơn 100.000đ",
    },
    {
        value: 200000,
        label: "200000 - 500.000đ",
    },
    {
        value: 500000,
        label: "Lớn hơn 500.000đ",
    },
]

export const optionSelectPageValues = [5, 10, 15]

export const listValueOfOrderToGet = [
    {
        value: "orderCode",
        label: "Mã đơn hàng",
    },
    {
        value: "totalPrice",
        label: "Giá trị đơn hàng",
    },
    {
        value: "paymentMethod",
        label: "Phương thức thanh toán",
    },
    {
        value: "createdAt",
        label: "Ngày đặt hàng",
    },
    {
        value: "status",
        label: "Trạng thái",
    },
]

export const listFieldOrderController = [
    {
        value: "orderCode",
        label: "Mã đơn hàng",
    },
    {
        value: "userId",
        label: "ID người dùng",
    },
    {
        value: "totalPrice",
        label: "Giá trị đơn hàng",
    },
    {
        value: "paymentMethod",
        label: "Phương thức thanh toán",
    },
    {
        value: "createdAt",
        label: "Ngày đặt hàng",
    },
    {
        value: "status",
        label: "Trạng thái",
    },
]

export const listFieldUserController = [
    {
        value: "_id",
        label: "User ID",
    },
    {
        value: "name",
        label: "Tên người dùng",
    },
    {
        value: "role",
        label: "Phân quyền",
    },
    {
        value: "isActive",
        label: "Trạng thái",
    },
    {
        value: "orders",
        label: "Số đơn đã đặt",
    },
    {
        value: "cancelOrders",
        label: "Số đơn hủy",
    },

    {
        value: "createdAt",
        label: "Ngày tham gia",
    },
]

export const listFieldProductController = [
    {
        value: "_id",
        label: "Product ID",
    },
    {
        value: "name",
        label: "Tên sản phẩm",
    },
    {
        value: "tag",
        label: "#Tag",
    },
    {
        value: "brand",
        label: "Thương hiệu",
    },
    {
        value: "quantity",
        label: "Số lượng tồn",
    },
    {
        value: "price",
        label: "Giá niêm Yết",
    },
    {
        value: "sold",
        label: "Đã bán",
    },
]

export const sizeLists = [
    { label: "S", value: "s" },
    { label: "M", value: "m" },
    { label: "L", value: "l" },
    { label: "XL", value: "xl" },
    { label: "XXL", value: "xxl" },
    { label: "3XL", value: "3xl" },
    { label: "4XL", value: "4xl" },
    { label: "36", value: "36" },
    { label: "37", value: "37" },
    { label: "38", value: "38" },
    { label: "39", value: "39" },
    { label: "40", value: "40" },
    { label: "41", value: "41" },
    { label: "42", value: "43" },
]

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
