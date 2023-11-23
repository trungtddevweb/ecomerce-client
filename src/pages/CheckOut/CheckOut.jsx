import PropTypes from "prop-types"
import { Fragment } from "react"
import { Grid, Breadcrumbs, Link, Typography } from "@mui/material"
import { NavigateNext } from "@mui/icons-material"
import Seo from "@/components/feature/Seo"
import { Outlet } from "react-router-dom"

function handleClick(event) {
    event.preventDefault()
    console.info("You clicked a breadcrumb.")
}

const CheckOut = (props) => {
    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/"
            onClick={handleClick}
        >
            Giỏ hàng
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
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
                <Grid item xs={6}>
                    <Breadcrumbs
                        separator={<NavigateNext fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                </Grid>

                <Grid item xs={6}>
                    <Outlet />
                </Grid>
            </Grid>
        </Fragment>
    )
}

CheckOut.propTypes = {}

export default CheckOut
