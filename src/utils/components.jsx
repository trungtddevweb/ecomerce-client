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
} from "@mui/icons-material"

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
        fetch: "/orders",
        label: "Đơn hàng",
        number: 100,
        icon: <ShoppingBag fontSize="small" color="info" />,
    },
    {
        fetch: "/sales",
        label: "Tổng doanh thu",
        number: 200,
        icon: <ShoppingCart fontSize="small" color="error" />,
    },
    {
        fetch: "/average-sales",
        label: "Trung bình doanh thu",
        number: 300,
        icon: <BarChart fontSize="small" color="success" />,
    },
    {
        fetch: "/customers",
        label: "Khách hàng",
        number: 120,
        icon: <Person2 fontSize="small" color="warning" />,
    },
    {
        fetch: "/stars",
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
