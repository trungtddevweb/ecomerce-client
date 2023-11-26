import { Fragment, useLayoutEffect } from "react"
import { Grid, Breadcrumbs, Link, Typography } from "@mui/material"
import { NavigateNext } from "@mui/icons-material"
import { Outlet, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { isAuthenticated } from "@/services/auth"
import { pathRoutes } from "@/utils/const"
import Seo from "@/components/feature/Seo"
import InfoBill from "./InfoBill"

const CheckOut = () => {
    const navigate = useNavigate()
    const carts = useSelector((state) => state.auth.carts)
    useLayoutEffect(() => {
        if (!isAuthenticated()) return navigate(`${pathRoutes.home}`)
    }, [navigate])

    // Handlers
    const handleNavigate = (path) => {
        navigate(path)
    }

    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            color="inherit"
            onClick={() => handleNavigate(`/${pathRoutes.cart}`)}
        >
            Giỏ hàng
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            onClick={() =>
                handleNavigate(
                    `/${pathRoutes.checkOut}/${pathRoutes.infoOrder}`,
                )
            }
        >
            Thông tin giao hàng
        </Link>,
        <Typography key="3" color="text.primary">
            Phương thức thanh toán
        </Typography>,
    ]

    return (
        <Fragment>
            <Seo description="" title="Đặt hàng" />
            <Grid container>
                <Grid item py={16} pl={32} xs={6}>
                    <Breadcrumbs
                        separator={<NavigateNext fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                    <Typography variant="h6" my={3}>
                        Thông tin giao hàng
                    </Typography>
                    <Outlet />
                </Grid>

                <Grid item xs={6} p={8}>
                    <InfoBill carts={carts} />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default CheckOut
