import { useState } from "react"
import { Tab, Box } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import Product from "./Fields/Product"
import Voucher from "./Fields/Voucher"
import Sale from "./Fields/Sale"

const StoreController = () => {
    const [value, setValue] = useState("product")

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    function getComponent(typeValue) {
        switch (typeValue) {
            case "product":
                return <Product />
            case "voucher":
                return <Voucher />
            case "products-sale":
                return <Sale />
            default:
                return <Product />
        }
    }

    return (
        <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                    >
                        <Tab label="Sản phẩm" value="product" />
                        <Tab label="Mã giảm giá" value="voucher" />
                        <Tab label="Sản phẩm sale" value="products-sale" />
                    </TabList>
                </Box>
                <TabPanel value={value}>{getComponent(value)}</TabPanel>
            </TabContext>
        </Box>
    )
}

export default StoreController
