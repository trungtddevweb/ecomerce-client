import PropTypes from "prop-types"
import { useState } from "react"
import {
    Box,
    Divider,
    TextField,
    Stack,
    Typography,
    Button,
} from "@mui/material"
import { useLocation } from "react-router-dom"
import LoadingButton from "@mui/lab/LoadingButton"
import { useDispatch } from "react-redux"

import ListProduct from "./ListProduct"
import TypeErrorMsg from "@/components/common/TypeErrorMsg"
import { formatPrice } from "@/utils/format"
import { usingVoucher } from "@/redux/userSlice"
import { getAVoucherAPI } from "@/api/main"

const InfoBill = ({ carts }) => {
    const location = useLocation()
    const totalPrice = location.state?.totalPrice
    const dispatch = useDispatch()
    // Voucher States & Handlers
    const [loading, setLoading] = useState(false)
    const [valueVoucher, setValueVoucher] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [tempCount, setTempCount] = useState(totalPrice || 0)
    const [discount, setDiscount] = useState(0)

    const handleGetVoucher = async (event) => {
        event.preventDefault()
        setLoading(true)
        try {
            const res = await getAVoucherAPI({ voucherCode: valueVoucher })
            if (res.status === 200) {
                setSuccess(true)
                dispatch(usingVoucher(res.data.voucherCode))
                setDiscount(res.data.discount)
                setTempCount(tempCount - Number(res.data.discount))
            }
        } catch (error) {
            setError(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    const handleCancel = () => {
        dispatch(usingVoucher(""))
    }

    return (
        <Box pr={32}>
            <Box overflow="scroll" height={300} className="scrollable-content">
                {carts.map((cart, idx) => (
                    <ListProduct
                        productId={cart.productId}
                        cartItem={cart}
                        key={idx}
                    />
                ))}
            </Box>
            <Divider />
            <Box py={4}>
                <form onSubmit={handleGetVoucher} className="mb-2">
                    <Box display="flex" gap={2}>
                        <TextField
                            sx={{ flex: 5 }}
                            label="Mã giảm giá"
                            type="text"
                            autoComplete="off"
                            onChange={(event) =>
                                setValueVoucher(event.target.value)
                            }
                        />
                        {success ? (
                            <Button sx={{ flex: 1 }} onClick={handleCancel}>
                                Hủy bỏ
                            </Button>
                        ) : (
                            <LoadingButton
                                loading={loading}
                                type="submit"
                                sx={{ flex: 1 }}
                                color="primary"
                                variant="contained"
                                disabled={!valueVoucher}
                            >
                                Sử dụng
                            </LoadingButton>
                        )}
                    </Box>
                </form>
                {error ? (
                    <TypeErrorMsg color="error" message={error} />
                ) : success ? (
                    <TypeErrorMsg
                        color="success"
                        message={`Áp dụng mã thành công - ${discount}₫`}
                    />
                ) : null}
            </Box>
            <Divider />
            <Box p={2} display="flex" gap={2} flexDirection="column">
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant="body1">Tạm tính</Typography>
                    <Typography variant="body2" color="error">
                        {formatPrice(location.state?.totalPrice || 0)}₫
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant="body1">Phí vận chuyển</Typography>
                    <Typography variant="body2" color="error">
                        ---
                    </Typography>
                </Stack>
            </Box>
            <Divider />
            <Stack
                direction="row"
                spacing={1}
                justifyContent="space-between"
                p={2}
            >
                <Typography variant="h6">Tổng cộng</Typography>
                <Typography variant="body1" color="error">
                    {formatPrice(tempCount)}₫
                </Typography>
            </Stack>
        </Box>
    )
}

InfoBill.propTypes = {
    carts: PropTypes.array.isRequired,
    totalPrice: PropTypes.number,
}

export default InfoBill
