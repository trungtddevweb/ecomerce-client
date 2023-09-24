import { Fragment, lazy } from "react";
import { Box, Card, CardMedia } from "@mui/material";

import Seo from "@/components/feature/Seo";
import banner1 from "@/assets/imgs/banner1.webp";
import NewProducts from "@/components/NewProducts/NewProducts";
import HotProducts from "@/components/HotProducts/HotProducts";
import SaleProducts from "@/components/SaleProducts/SaleProducts";
import useStyles from "@/assets/styles";

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Seo
        title="Shoppp | Trang chủ"
        description="Tadaaaa"
        type="Web Application"
        name="Shoppp"
      />
      <Box className={classes.marginAuto}>
        <Card>
          <CardMedia component="img" src={banner1} alt="banner" />
        </Card>
      </Box>
      <NewProducts />

      <Card>
        <CardMedia
          component="img"
          src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
        />
      </Card>
      <SaleProducts />
    </Fragment>
  );
};

export default Home;
