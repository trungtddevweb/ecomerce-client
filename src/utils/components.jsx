import {
    CardGiftcard,
    Inventory2,
    Person2,
    Settings,
    ShoppingBag,
    Storefront,
    Dashboard,
    ShoppingCart,
    BarChart,
    StarBorder,
    LocalShipping,
} from "@mui/icons-material"
import { AccountOrder, AccountSetting } from "./const"

export const listTabsAccountSetting = [
    {
        icon: <Person2 />,
        label: "Thông tin cá nhân",
        slug: "?tab=setting",
        value: "setting",
    },
    {
        icon: <LocalShipping />,
        label: "Đơn hàng của tôi",
        slug: "?tab=order",
        value: "order",
    },
]

export const listTabsComponent = {
    setting: <AccountSetting />,
    order: <AccountOrder />,
}

export const navItemsDashboard = [
    {
        icon: <Dashboard color="info" />,
        label: "Quản lý",
        value: "Dashboard",
        slug: "",
    },
    {
        icon: <ShoppingBag color="secondary" />,
        label: "Đơn đặt hàng",
        value: "Order",
        slug: "order",
    },
    {
        icon: <Inventory2 color="action" />,
        label: "Sản phẩm",
        value: "Product",
        slug: "product",
    },
    {
        icon: <CardGiftcard color="primary" />,
        label: "Mã giảm giá",
        value: "Voucher",
        slug: "voucher",
    },
    {
        icon: <Person2 color="warning" />,
        label: "Khách hàng",
        value: "Customer",
        slug: "customer",
    },
    {
        icon: <Storefront color="success" />,
        label: "Cửa hàng",
        value: "Store",
        slug: "store",
    },
    {
        icon: <Settings color="secondary" />,
        label: "Cài đặt",
        value: "Setting",
        slug: "setting",
    },
]

export const listItemsOverview = [
    {
        fetchUrl: "orders",
        label: "Đơn hàng",
        number: 100,
        icon: <ShoppingBag fontSize="small" color="info" />,
    },
    {
        fetchUrl: "sales",
        label: "Tổng doanh thu",
        number: 200,
        icon: <ShoppingCart fontSize="small" color="error" />,
    },
    {
        fetchUrl: "average-sales",
        label: "Trung bình doanh thu",
        number: 300,
        icon: <BarChart fontSize="small" color="success" />,
    },
    {
        fetchUrl: "users",
        label: "Khách hàng",
        number: 120,
        icon: <Person2 fontSize="small" color="warning" />,
    },
    {
        fetchUrl: "stars",
        label: "Đánh giá",
        number: 320,
        icon: <StarBorder fontSize="small" color="secondary" />,
    },
]

// Dashboard query
export const optionsListQuery = [
    "Hôm nay",
    "Tuần trước",
    "Tháng trước",
    "Năm trước",
]

export const listQueryOfTypeDate = [
    {
        fetch: "/orders",
        label: "Đơn hàng",
        number: 1212,
        icon: <ShoppingBag fontSize="small" color="info" />,
    },
    {
        fetch: "/sales",
        label: "Tổng doanh thu",
        number: 14411,
        icon: <ShoppingCart fontSize="small" color="error" />,
    },

    {
        fetch: "/customers",
        label: "Khách hàng",
        number: 22,
        icon: <Person2 fontSize="small" color="warning" />,
    },
    {
        fetch: "/stars",
        label: "Đánh giá",
        number: 141,
        icon: <StarBorder fontSize="small" color="secondary" />,
    },
]
