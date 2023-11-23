import Seo from "@/components/feature/Seo"
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material"
import Image from "mui-image"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import cartBanner from "@/assets/images/cart.jpg"
import cartEmpty from "@/assets/images/cartEmpty.png"
import CartItem from "./CartItem"
import { formatPrice } from "@/utils/format"
import { pathRoutes } from "@/utils/const"

const Cart = () => {
    const carts = useSelector((state) => state.auth.carts)
    const navigate = useNavigate()
    const cartLength = carts.length
    const totalPrice = carts?.reduce(
        (cart, currentValue) => cart + currentValue.sumPrice,
        0,
    )

    const cartIsEmpty = (
        <Grid container spacing={1} pt={8}>
            <Grid
                item
                xs={7}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant="h5" mb={1}>
                    Giỏ hàng của bạn đang trống
                </Typography>
                <Link to={`/${pathRoutes.collection}`}>
                    <Typography
                        variant="palette.primary.main"
                        fontStyle="italic"
                        fontWeight={600}
                    >
                        Mua gì đó ngay!
                    </Typography>
                </Link>
            </Grid>
            <Grid item xs={5}>
                <img width={200} src={cartEmpty} alt="Cart Empty" />
            </Grid>
        </Grid>
    )

    return (
        <>
            <Seo title={`Giỏ hàng (${cartLength})`} />
            <Box className="bg-auth bg-gray-900/60 bg-blend-overlay">
                <Image
                    src={cartBanner}
                    alt="Cart Banner"
                    height={400}
                    duration={0}
                />
            </Box>
            <Box className="flex justify-center mt-4">
                <Box width={1400}>
                    <Typography variant="h5" fontWeight={600} color="primary">
                        Giỏ hàng của tôi
                    </Typography>
                    {cartLength !== 0 && (
                        <Typography
                            color="GrayText"
                            variant="body1"
                            fontStyle="italic"
                            py={1}
                        >
                            Bạn đang có{" "}
                            <Typography component="strong" fontWeight={700}>
                                {" "}
                                {cartLength}
                            </Typography>{" "}
                            sản phẩm trong giỏ
                        </Typography>
                    )}
                    <Grid container spacing={4}>
                        <Grid item xs={8} mb={4}>
                            {carts.map((cart) => (
                                <CartItem cart={cart} key={cart._id} />
                            ))}
                            {cartLength === 0 && cartIsEmpty}
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                border="1px solid gray"
                                position="sticky"
                                top="10px"
                            >
                                <Typography
                                    variant="body1"
                                    fontWeight={600}
                                    p={1}
                                    bgcolor="#3a3636"
                                    color="white"
                                >
                                    THÔNG TIN ĐƠN HÀNG
                                </Typography>
                                <Stack p={2} spacing={1}>
                                    <Typography
                                        variant="body1"
                                        fontWeight={550}
                                    >
                                        Tổng tiền:{" "}
                                        <Typography
                                            component="span"
                                            color="error"
                                            variant="h6"
                                        >
                                            {formatPrice(totalPrice)}₫
                                        </Typography>
                                    </Typography>
                                    <Typography
                                        color="gray"
                                        variant="subtitle2"
                                    >
                                        Phí vận chuyển sẽ được tính ở trang
                                        thanh toán. Bạn cũng có thể nhập mã giảm
                                        giá ở trang thanh toán.
                                    </Typography>
                                    <Divider />
                                </Stack>
                                <Stack p={2} spacing={1.5}>
                                    <Button
                                        fullWidth
                                        color="inherit"
                                        variant="outlined"
                                        onClick={() =>
                                            navigate(
                                                `/${pathRoutes.collection}`,
                                            )
                                        }
                                    >
                                        Tiếp tục mua hàng
                                    </Button>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        onClick={() =>
                                            navigate(
                                                `/${pathRoutes.checkOut}/${pathRoutes.infoOrder}`,
                                            )
                                        }
                                    >
                                        Thanh toán
                                    </Button>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Cart
