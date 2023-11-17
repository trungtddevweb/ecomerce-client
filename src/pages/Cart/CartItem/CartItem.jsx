import PropTypes from "prop-types"
import { formatPrice } from "@/utils/format"
import { Delete } from "@mui/icons-material"
import { Divider, IconButton, Stack, Tooltip, Typography } from "@mui/material"
import useFetch from "@/hooks/useFetch"

const CartItem = ({ cart }) => {
    const { data: product, loading } = useFetch(
        `/products/find/${cart.productId}`,
    )

    if (loading) return <div>Loading...</div>

    return (
        <>
            {product && (
                <>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        py={1}
                    >
                        <Stack direction="row" spacing={2}>
                            <img
                                className="w-[190px] h-[200px] object-cover"
                                src={product.productImages[0] || ""}
                            />
                            <Stack spacing={0.5}>
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    width="95%"
                                >
                                    {product.name}
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    <Typography variant="body1">
                                        Giá:
                                    </Typography>
                                    <Typography color="error">
                                        {formatPrice(product.price)}đ
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <Typography variant="body1">
                                        Màu sắc: {cart.color}
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <Typography variant="body1">
                                        Kích thước: {cart.size}
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <Typography variant="body1">
                                        Số lượng: {cart.quantity}
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <Typography variant="body1">
                                        Thành tiền:
                                    </Typography>
                                    <Typography color="error" fontWeight={600}>
                                        {formatPrice(cart.sumPrice)}₫
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Tooltip title="Xóa">
                            <IconButton
                                sx={{
                                    height: "max-content",
                                    flexDirection: "flex-end",
                                }}
                            >
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Divider variant="fullWidth" />
                </>
            )}
        </>
    )
}

CartItem.propTypes = {
    cart: PropTypes.object.isRequired,
}

export default CartItem
