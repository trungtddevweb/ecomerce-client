import PropTypes from "prop-types"
import { Fragment } from "react"
import { Divider, IconButton, Stack, Tooltip, Typography } from "@mui/material"
import { Delete } from "@mui/icons-material"
import { useDispatch } from "react-redux"

import useFetch from "@/hooks/useFetch"
import { formatPrice } from "@/utils/format"
import { removeProductFromCartAPI } from "@/api/main"
import { showToast } from "@/redux/toastSlice"
import { removeProductFromCart } from "@/redux/userSlice"

const CartItem = ({ cart }) => {
    const dispatch = useDispatch()
    const { data } = useFetch(`/products/find/${cart.productId._id}`)
    const handleDelete = async () => {
        try {
            const response = await removeProductFromCartAPI({
                itemId: cart._id,
            })
            if (response.status === 200) {
                dispatch(removeProductFromCart(cart._id))
            }
        } catch (error) {
            console.error(error)
            dispatch(
                showToast({
                    type: "error",
                    message: "Có lỗi xảy ra hãy thử lại",
                }),
            )
        }
    }

    if (!data) return <div>Loading...</div>

    return (
        <>
            {data && (
                <Fragment>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        py={1}
                    >
                        <Stack direction="row" spacing={2}>
                            <img
                                className="w-[190px] h-[200px] object-cover"
                                src={data.productImages?.[0] || " "}
                                alt={data.name}
                            />
                            <Stack spacing={0.5}>
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    width="95%"
                                >
                                    {data && data.name}
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    <Typography variant="body1">
                                        Giá:
                                    </Typography>
                                    <Typography color="error">
                                        {formatPrice(data.price)}đ
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
                                onClick={handleDelete}
                            >
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Divider variant="fullWidth" />
                </Fragment>
            )}
        </>
    )
}

CartItem.propTypes = {
    cart: PropTypes.object.isRequired,
}

export default CartItem
