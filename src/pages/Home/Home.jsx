import { Box, Card, CardMedia } from "@mui/material"

import Seo from "@/components/feature/Seo"
import SaleProducts from "@/components/SaleProducts/SaleProducts"
import useStyles from "@/assets/styles"
import NewProducts from "./NewProducts"
import ListProducts from "@/components/ListProducts/ListProduct"
import Ordering from "@/components/Ordering/Ordering"

const Home = () => {
    const classes = useStyles()
    return (
        <>
            <Seo
                title="Shoppp | Trang chủ"
                description="Tadaaaa"
                type="Web Application"
                name="Shoppp"
            />
            <Box className={classes.marginAuto}>
                <Card>
                    <CardMedia
                        component="img"
                        src="https://theme.hstatic.net/1000277887/1001122886/14/home_slider_item_image_1.png?v=424"
                        alt="banner"
                    />
                </Card>
            </Box>
            <ListProducts />
            <NewProducts />
            <Card>
                <CardMedia
                    component="img"
                    src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
                />
            </Card>
            <SaleProducts />
            <Ordering />
        </>
    )
}

export default Home
