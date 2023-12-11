import { Box, Stack, Typography, Button } from "@mui/material"
import shippingImage from "@/assets/images/shipping.png"
import { useParams, Link, useNavigate } from "react-router-dom"
import useStyles from "@/assets/styles"
import { pathRoutes } from "@/utils/const"

const OrderSuccess = () => {
    const { orderCode } = useParams()
    const classes = useStyles()
    const navigate = useNavigate()

    return (
        <Box className={classes.flexBox} height="100vh">
            <Stack spacing={2} className={classes.flexBox}>
                <img src={shippingImage} width={300} alt="Shipping Image" />
                <Stack spacing={1} className={classes.flexBox}>
                    <Stack direction="row" spacing={0.6} alignItems="center">
                        <Typography>Mã đơn hàng của bạn là</Typography>
                        <Typography color="red">{orderCode}</Typography>
                    </Stack>
                    <Typography>
                        Đặt hàng thành công! Cảm ơn bạn đã quan tâm và đặt hàng
                        tại cửa hàng của chúng tôi
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Typography
                        component={Link}
                        to={pathRoutes.home}
                        className="underline"
                    >
                        Quay lại trang chủ
                    </Typography>
                    <Button
                        onClick={() => navigate(`/${pathRoutes.collection}`)}
                    >
                        Tiếp tục mua hàng
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default OrderSuccess
