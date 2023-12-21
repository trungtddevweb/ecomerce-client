import { Box, Grid, Typography } from "@mui/material"
import useStyles from "@/assets/styles"
const Ordering = () => {
    const classes = useStyles()
    return (
        <Box className={classes.marginAuto} py={5}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Box className="flex flex-col items-center justify-center">
                        <img
                            src="https://ecomerce-shoping.vercel.app/static/media/shipping.a42b8e3f0345b3454934.png"
                            alt=""
                            className=" w-20 h-20 mb-2.5"
                        />
                        <Typography variant="h6" gutterBottom>
                            Giao hàng nhanh, miễn phí
                        </Typography>
                        <Typography className="text-center">
                            Đơn hàng 900k hoặc đăng ký tài khoản được giao hàng
                            miễn phí
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className="flex flex-col items-center justify-center">
                        <img
                            src="https://ecomerce-shoping.vercel.app/static/media/return.d51dd67f2693aa4dd127.png"
                            alt=""
                            className="w-20 h-20 mb-2.5"
                        />
                        <Typography variant="h6" gutterBottom>
                            Trả hàng, Bảo hành
                        </Typography>
                        <Typography className="text-center">
                            Không thích? Trả lại hoặc đổi hàng của bạn miễn phí
                            trong vòng 30 ngày.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className="flex flex-col items-center justify-center">
                        <img
                            src="https://ecomerce-shoping.vercel.app/static/media/checked.e1c9aaebbb6a5a587b01.png"
                            alt=""
                            className="w-20 h-20 mb-2.5"
                        />
                        <Typography variant="h6" gutterBottom>
                            Made In Vietnam
                        </Typography>
                        <Typography className="text-center">
                            Sản phẩm sản xuất tại nhà máy Việt Nam 100%. Sản
                            xuất, gia công số lượng lớn
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Ordering
