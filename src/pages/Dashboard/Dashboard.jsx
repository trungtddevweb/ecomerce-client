import { Box, Divider, Grid } from "@mui/material"
import Header from "./Header"
import Seo from "@/components/feature/Seo"
import NavItems from "./NavItems"
import { useCallback, useState } from "react"
import { navItemsDashboard } from "@/utils/components"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
    const [tag, setTag] = useState(navItemsDashboard[0].value)

    const handleChangeTag = useCallback((newTag) => {
        setTag(newTag)
    }, [])

    return (
        <>
            <Seo title="Trang quản lý" type="webapp" description="" />
            <Box className="h-screen">
                <Box component="header" px={4}>
                    <Header tag={tag} />
                </Box>
                <Divider />
                <Grid container>
                    <Grid item md={2.499} p={3} height={`calc(100vh - 73px)`}>
                        <NavItems setTag={handleChangeTag} />
                    </Grid>
                    <Grid item md={0.001}>
                        <Divider variant="fullWidth" orientation="vertical" />
                    </Grid>
                    <Grid item md={9.5} p={2}>
                        <Outlet />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Dashboard
