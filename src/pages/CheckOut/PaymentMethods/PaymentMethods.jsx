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
    Button,
} from "@mui/material"
import { CreditCard, LocalShipping } from "@mui/icons-material"
import { useLocation, useNavigate } from "react-router-dom"

import useStyles from "@/assets/styles"
import { createOrderAPI } from "@/api/main"

const PaymentMethods = () => {
    const classes = useStyles()
    const [paymentMethod, setPaymentMethod] = useState("cash")
    const [loading, setLoading] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    // Handlers
    const handleChange = (event, value) => {
        setPaymentMethod(value)
    }
    const orderValue = {
        ...location.state,
        paymentMethod,
    }
    console.log(orderValue)

    const handleCreateOrder = async () => {
        setLoading(true)
        try {
            const response = await createOrderAPI("payload")
            console.log(response)
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
            <Button
                variant="contained"
                color="primary"
                onClick={handleCreateOrder}
            >
                Hòan tất đơn hàng
            </Button>
        </Box>
    )
}

PaymentMethods.propTypes = {}

export default PaymentMethods
