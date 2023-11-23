import PropTypes from "prop-types"
import { Fragment } from "react"
import { Grid, Breadcrumbs, Link, Typography } from "@mui/material"
import { NavigateNext } from "@mui/icons-material"
import { Outlet, useNavigate } from "react-router-dom"

import Seo from "@/components/feature/Seo"
import { isAuthenticated } from "@/services/auth"
import { pathRoutes } from "@/utils/const"

const CheckOut = (props) => {
    const navigate = useNavigate()
    const handleNavigate = (path) => {
        navigate(path)
    }

    if (!isAuthenticated()) {
        return navigate(`/${pathRoutes.home}`)
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
                <Grid item py={16} pl={32}>
                    <Breadcrumbs
                        separator={<NavigateNext fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                    <Typography variant="h6" mt={3}>
                        Thông tin giao hàng
                    </Typography>
                </Grid>

                <Grid item>
                    <Outlet />
                </Grid>
            </Grid>
        </Fragment>
    )
}

CheckOut.propTypes = {}

export default CheckOut
