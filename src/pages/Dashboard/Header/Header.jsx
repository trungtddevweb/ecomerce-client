import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { Avatar, Badge, Box, Stack, Typography } from "@mui/material"
import { useTheme } from "@emotion/react"
import logo from "@/assets/images/logo.png"
import { Mail, Notifications } from "@mui/icons-material"
import { useSelector } from "react-redux"

const Header = ({ tag }) => {
    const navigate = useNavigate()
    const theme = useTheme()
    const user = useSelector((state) => state.auth.user)
    console.log(user)

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
                    >
                        <Box
                            component="input"
                            placeholder="Tìm kiếm..."
                            className="bg-transparent px-3 w-full"
                        />
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
                    >
                        <Avatar alt={user.name} src={user.avtUrl} />
                        <Typography fontWeight={600}>{user.name}</Typography>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}

Header.propTypes = {
    tag: PropTypes.string.isRequired,
}

export default Header
