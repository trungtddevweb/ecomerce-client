import PropTypes from "prop-types"
import { useState } from "react"
import { Box, Divider, TextField, Stack, Typography } from "@mui/material"
import ListProduct from "./ListProduct"
import { useLocation } from "react-router-dom"

import LoadingButton from "@mui/lab/LoadingButton"

import TypeErrorMsg from "@/components/common/TypeErrorMsg"
import { formatPrice } from "@/utils/format"

const InfoBill = ({ carts }) => {
    const location = useLocation()
    const totalPrice = location.state.totalPrice
    // Voucher States & Handlers
    const [loading, setLoading] = useState(false)
    const [valueVoucher, setValueVoucher] = useState("")
    const handleGetVoucher = async (event) => {
        event.preventDefault()
        setLoading(true)
    }
    const [tempCount, setTempCount] = useState(totalPrice || 0)

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
                    </Box>
                </form>
                <TypeErrorMsg color="green" message="Success" />
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
