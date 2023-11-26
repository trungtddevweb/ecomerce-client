import PropTypes from "prop-types"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    Call,
    ExpandMore,
    KeyboardArrowRight,
    Logout,
    Person2,
    Settings,
    ShoppingCart,
} from "@mui/icons-material"
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Typography,
    Badge,
    useColorScheme,
    Switch,
    Button,
    MenuItem,
    ListItemIcon,
    Stack,
    Avatar,
    Menu,
    Tooltip,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import styled from "@emotion/styled"
import { Link, redirect, useNavigate } from "react-router-dom"
import HideOnScroll from "../HideOnScroll"
import useStyles, {
    Search,
    SearchIconWrapper,
    StyledInputBase,
} from "@/assets/styles"

import { pathRoutes } from "@/utils/const"
import useFetch from "@/hooks/useFetch"
import { signOutAPI } from "@/api/main"
import { logoutSuccess } from "@/redux/userSlice"
import Backdrop from "@/components/common/Backdrop"

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
        margin: 1,
        padding: 0,
        transform: "translateX(6px)",
        "&.Mui-checked": {
            color: "#fff",
            transform: "translateX(22px)",
            "& .MuiSwitch-thumb:before": {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    "#fff",
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor:
                    theme.palette.mode === "dark" ? "#8796A5" : "#beb2aa",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#fc6500",
        width: 32,
        height: 32,
        "&:before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                "#fff",
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    "& .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        borderRadius: 20 / 2,
    },
}))

export default function Header(props) {
    const { mode, setMode } = useColorScheme()
    const { data: user } = useFetch("/user/get-user")
    const cartCount = useSelector((state) => state.auth.carts)

    const [anchorEl, setAnchorEl] = useState(null)
    const [loading, setLoading] = useState(false)
    const open = Boolean(anchorEl)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const classes = useStyles()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleSignOut = async () => {
        handleClose()
        try {
            setLoading(true)
            const res = await signOutAPI()
            if (res.status === 200) {
                dispatch(logoutSuccess())
                redirect(pathRoutes.home)
            }
        } catch (error) {
            console.error("Error is : ---------->", error)
        } finally {
            setLoading(false)
        }
    }

    // Handlers
    const handleNavigate = () => {
        navigate(pathRoutes.signIn)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar
                        sx={{
                            display: "flex",
                        }}
                    >
                        <Typography
                            variant="h6"
                            component={Link}
                            to="/"
                            sx={{
                                display: { xs: "none", sm: "block" },
                                flex: 1,
                            }}
                        >
                            MAYStore
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />

                        <Search
                            sx={{
                                flex: 4,
                                width: "100%",
                            }}
                        >
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Tìm kiếm..."
                                inputProps={{ "aria-label": "search" }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 0.5 }} />
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Call color="success" fontSize="large" />
                            <Box>
                                <Typography variant="subtitle2">
                                    Hotline
                                </Typography>
                                <Typography variant="subtitle1">
                                    0123.456.789
                                </Typography>
                            </Box>
                        </Stack>
                        <Box
                            display="flex"
                            alignItems="center"
                            flex={3}
                            flexDirection="row-reverse"
                        >
                            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                    onClick={() =>
                                        navigate(`/${pathRoutes.cart}`)
                                    }
                                >
                                    <Badge
                                        badgeContent={
                                            cartCount ? cartCount.length : 0
                                        }
                                        color="error"
                                    >
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>
                                {isLoggedIn ? (
                                    <>
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                            ml={2}
                                        >
                                            <Typography variant="body1">
                                                {user?.name}
                                            </Typography>

                                            <Avatar
                                                sx={{
                                                    width: 32,
                                                    height: 32,
                                                }}
                                                src={user?.avtUrl}
                                                alt={user?.name}
                                            />
                                            <IconButton
                                                id="basic-button"
                                                aria-controls={
                                                    open
                                                        ? "basic-menu"
                                                        : undefined
                                                }
                                                aria-haspopup="true"
                                                aria-expanded={
                                                    open ? "true" : undefined
                                                }
                                                onClick={handleClick}
                                            >
                                                {open ? (
                                                    <ExpandMore />
                                                ) : (
                                                    <KeyboardArrowRight />
                                                )}
                                            </IconButton>

                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                PaperProps={{
                                                    elevation: 0,
                                                    sx: {
                                                        overflow: "visible",
                                                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                                        mt: 1.5,
                                                        "& .MuiAvatar-root": {
                                                            width: 32,
                                                            height: 32,
                                                            ml: -0.5,
                                                            mr: 1,
                                                        },
                                                        "&:before": {
                                                            content: '""',
                                                            display: "block",
                                                            position:
                                                                "absolute",
                                                            top: 0,
                                                            right: 14,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor:
                                                                "background.paper",
                                                            transform:
                                                                "translateY(-50%) rotate(45deg)",
                                                            zIndex: 0,
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{
                                                    horizontal: "right",
                                                    vertical: "top",
                                                }}
                                                anchorOrigin={{
                                                    horizontal: "left",
                                                    vertical: "bottom",
                                                }}
                                            >
                                                <MenuItem onClick={handleClose}>
                                                    <ListItemIcon>
                                                        <Person2 fontSize="small" />
                                                    </ListItemIcon>
                                                    Thông tin
                                                </MenuItem>
                                                <MenuItem onClick={handleClose}>
                                                    <ListItemIcon>
                                                        <Settings fontSize="small" />
                                                    </ListItemIcon>
                                                    Cài đặt
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={handleSignOut}
                                                >
                                                    <ListItemIcon>
                                                        <Logout fontSize="small" />
                                                    </ListItemIcon>
                                                    Đăng xuất
                                                </MenuItem>
                                            </Menu>
                                        </Stack>
                                    </>
                                ) : (
                                    <Box mx={2} className={classes.flexBox}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={handleNavigate}
                                        >
                                            Đăng nhập
                                        </Button>
                                    </Box>
                                )}
                            </Box>
                            <Box>
                                <Tooltip
                                    title={mode === "light" ? "Sáng" : "Tối"}
                                >
                                    <MaterialUISwitch
                                        onClick={() => {
                                            setMode(
                                                mode === "light"
                                                    ? "dark"
                                                    : "light",
                                            )
                                        }}
                                        checked={mode === "dark"}
                                    />
                                </Tooltip>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Backdrop open={loading} />
        </Box>
    )
}

Header.propTypes = {
    window: PropTypes.func,
}
