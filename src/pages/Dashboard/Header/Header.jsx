import PropTypes from "prop-types"
import { redirect, useNavigate } from "react-router-dom"
import { Avatar, Backdrop, Badge, Box, Stack, Typography } from "@mui/material"
import { useTheme } from "@emotion/react"
import logo from "@/assets/images/logo.png"
import { Clear, Mail, Notifications, Search } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { useRef, useState } from "react"
import { signOutAPI } from "@/api/main"
import { logoutSuccess } from "@/redux/userSlice"

const Header = ({ tag }) => {
    const [loading, setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const user = useSelector((state) => state.auth.user)
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

    const handleSignOut = async () => {
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
                        spacing={1}
                        direction="row"
                        alignItems="center"
                        onClick={handleSignOut}
                    >
                        <Avatar alt={user.name} src={user.avtUrl} />
                        <Typography fontWeight={600}>{user.name}</Typography>
                    </Stack>
                </Stack>
            </Box>
            <Backdrop
                open={loading}
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            />
        </Box>
    )
}

Header.propTypes = {
    tag: PropTypes.string.isRequired,
}

export default Header
