import { useState } from "react"
import {
    Box,
    Typography,
    List,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    ListItem,
    Checkbox,
    IconButton,
    Collapse,
} from "@mui/material"
import { LoadingButton } from "@mui/lab"
import { CreditCard, LocalShipping } from "@mui/icons-material"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import useStyles from "@/assets/styles"
import { clearCartAPI, createOrderAPI } from "@/api/main"
import { clearCart } from "@/redux/userSlice"

const PaymentMethods = () => {
    const classes = useStyles()
    const [paymentMethod, setPaymentMethod] = useState("cash")
    const voucher = useSelector((state) => state.auth.voucher)
    const carts = useSelector((state) => state.auth.carts)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    // Handlers
    const handleChange = (event, value) => {
        setPaymentMethod(value)
    }

    const orderValue = {
        ...location.state.payload,
        voucher,
        products: carts,
        paymentMethod,
    }

    const handleCreateOrder = async () => {
        setLoading(true)
        try {
            const response = await createOrderAPI(orderValue)
            if (response.success) {
                dispatch(clearCart())
                clearCartAPI()
                navigate(`/order-success/${response.orderCode}`)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Box>
            <Typography variant="h6">Phương thức thanh toán</Typography>
            <List
                sx={{
                    width: "100%",
                    maxWidth: 500,
                    bgcolor: "background.paper",
                    my: 2,
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItem
                    disablePadding
                    secondaryAction={
                        <IconButton edge="end">
                            <Checkbox
                                checked={paymentMethod === "cash"}
                                tabIndex={-1}
                            />
                        </IconButton>
                    }
                    onClick={(e) => handleChange(e, "cash")}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <LocalShipping />
                        </ListItemIcon>
                        <ListItemText primary="Thanh toán khi nhận hàng (COD)" />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    disablePadding
                    secondaryAction={
                        <IconButton edge="end">
                            <Checkbox
                                checked={paymentMethod === "credit-card"}
                                tabIndex={-1}
                            />
                        </IconButton>
                    }
                    onClick={(e) => handleChange(e, "credit-card")}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <CreditCard />
                        </ListItemIcon>
                        <ListItemText primary="Chuyển khoản qua ngân hàng" />
                    </ListItemButton>
                </ListItem>
                <Collapse
                    in={paymentMethod === "credit-card"}
                    timeout="auto"
                    unmountOnExit
                >
                    <Box
                        className={classes.flexBox}
                        flexDirection="column"
                        my={4}
                    >
                        <Typography>Ngân hàng Viecombank</Typography>
                        <Typography>
                            STK: 12345.6789.xxx - Chi nhánh Trâu Quỳ, Gia Lâm,
                            Hà Nội
                        </Typography>
                    </Box>
                </Collapse>
            </List>
            <LoadingButton
                variant="contained"
                color="primary"
                loading={loading}
                onClick={handleCreateOrder}
            >
                Hòan tất đơn hàng
            </LoadingButton>
        </Box>
    )
}

PaymentMethods.propTypes = {}

export default PaymentMethods
