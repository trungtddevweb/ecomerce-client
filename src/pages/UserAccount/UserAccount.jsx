import useStyles from "@/assets/styles"
import Seo from "@/components/feature/Seo"
import { listTabsAccountSetting, listTabsComponent } from "@/utils/components"
import { AccountSetting, pathRoutes } from "@/utils/const"
import {
    Box,
    Grid,
    Typography,
    ListItem,
    List,
    ListItemButton,
    ListItemText,
    ListItemIcon,
} from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"

const UserAccount = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const activeTab = searchParams.get("tab")

    const activeComponent = listTabsComponent[activeTab] || <AccountSetting />

    // Handlers
    const handleChangeTab = (event, tab) => {
        event.preventDefault()
        navigate(`/${pathRoutes.userAccount}/${tab}`)
    }

    return (
        <>
            <Seo title="Quản lý tài khoản" />
            <Box className={classes.flexBox}>
                <Grid width={1400} container spacing={1}>
                    <Grid item xs={3}>
                        <Typography variant="h6">Quản lý tài khoản</Typography>
                        <List>
                            {listTabsAccountSetting.map((item) => (
                                <ListItem key={item.slug} disablePadding>
                                    <ListItemButton
                                        selected={item.value === activeTab}
                                        onClick={(event) =>
                                            handleChangeTab(event, item.slug)
                                        }
                                    >
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.label} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    <Grid xs={9} item>
                        {activeComponent}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

UserAccount.propTypes = {}

export default UserAccount
