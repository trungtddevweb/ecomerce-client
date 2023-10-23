import {
    CardGiftcard,
    Inventory2,
    Person2,
    Settings,
    ShoppingBag,
    Storefront,
    Dashboard,
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
