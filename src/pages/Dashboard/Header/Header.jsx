import PropTypes from "prop-types"
import { redirect, useNavigate } from "react-router-dom"
import {
    Avatar,
    Badge,
    Box,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Stack,
    Typography,
} from "@mui/material"
import { useTheme } from "@emotion/react"
import logo from "@/assets/images/logo.png"
import {
    Clear,
    ExpandMore,
    Logout,
    Mail,
    Notifications,
    Person2,
    Search,
    Settings,
} from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { useRef, useState } from "react"
import { signOutAPI } from "@/api/main"
import { logoutSuccess } from "@/redux/userSlice"
import Backdrop from "@/components/common/Backdrop"

const Header = ({ tag }) => {
    const [loading, setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const user = useSelector((state) => state.auth.user)
    const [anchorEl, setAnchorEl] = useState(null)

    const navigate = useNavigate()
    const theme = useTheme()
    const dispatch = useDispatch()
    const inputSearch = useRef()

    const handleChangeValue = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearValue = () => {
        setSearchValue("")
        inputSearch.current.focus()
    }

    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleSignOut = async () => {
        handleClose()
        try {
            setLoading(true)
            const res = await signOutAPI()
            if (res.status === 200) {
                dispatch(logoutSuccess())
                redirect("/")
            }
        } catch (error) {
            console.error("Error is : ---------->", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Box component="nav" className="flex items-center py-1">
            <Box
                sx={{
                    flex: 2,
                    px: 2,
                }}
            >
                <img
                    src={logo}
                    alt="MayStore"
                    onClick={() => navigate("/")}
                    className="cursor-pointer"
                    title="May Store"
                />
            </Box>
            <Typography
                sx={{
                    flex: 3,
                }}
                variant="h6"
                color="primary"
            >
                {tag}
            </Typography>
            <Box
                sx={{
                    flex: 5,
                }}
            >
                <Stack direction="row" spacing={5} alignItems="center">
                    <Box
                        sx={{
                            bgcolor:
                                theme.palette.mode === "dark"
                                    ? "dimgray"
                                    : "lightgray",
                        }}
                        p={1}
                        borderRadius={10}
                        flex={3}
                        className="flex items-center overflow-hidden"
                    >
                        <Box
                            component="input"
                            placeholder="Tìm kiếm..."
                            className="bg-transparent px-3 w-full"
                            ref={inputSearch}
                            type="text"
                            value={searchValue}
                            onChange={(e) => handleChangeValue(e)}
                        />
                        {searchValue && (
                            <Clear
                                sx={{ cursor: "pointer", mr: 1.5 }}
                                fontSize="12px"
                                color="action"
                                onClick={handleClearValue}
                            />
                        )}
                        <Search />
                    </Box>

                    <Stack spacing={2} direction="row" flex={3}>
                        <Badge badgeContent={4} color="secondary">
                            <Mail color="warning" />
                        </Badge>
                        <Badge badgeContent={100} color="error">
                            <Notifications color="info" />
                        </Badge>
                    </Stack>
                    <Stack
                        flex={2}
                        direction="row"
                        alignItems="center"
                        // onClick={handleSignOut}
                        justifyContent="flex-end"
                    >
                        <Stack
                            spacing={1.5}
                            direction="row"
                            alignItems="center"
                        >
                            <Typography
                                fontWeight={600}
                                width="max-content"
                                color="primary"
                            >
                                {user.name}
                            </Typography>
                            <Avatar alt={user.name} src={user.avtUrl} />
                        </Stack>
                        <IconButton
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                        >
                            <ExpandMore />
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
                                        position: "absolute",
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: "background.paper",
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
                            <MenuItem onClick={handleSignOut}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Đăng xuất
                            </MenuItem>
                        </Menu>
                    </Stack>
                </Stack>
            </Box>
            <Backdrop open={loading} />
        </Box>
    )
}

Header.propTypes = {
    tag: PropTypes.string.isRequired,
}

export default Header
