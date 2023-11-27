import { makeStyles, createStyles } from "@mui/styles"
import { styled, alpha } from "@mui/material/styles"
import { Badge, InputBase } from "@mui/material"

// Header
export const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}))

export const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "80ch",
        },
    },
}))

// UseStyles
const useStyles = makeStyles(() =>
    createStyles({
        flexBox: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        limitLines: {
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        hoverItem: {
            "&:hover": {
                color: "CurrentColor",
            },
        },
        limitTitle: {
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        breadcrumbs: {
            fontSize: "12px",
            fontWeight: "bold",
        },
        marginAuto: {
            margin: "0 auto",
            width: "1200px",
        },
        avatar: {
            width: "50px",
            height: "50px",
        },
        limitDesc: {
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 4,
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        zoomImage: {
            position: "relative",
            overflow: "hidden",
            "&:hover img": {
                transform: "scale(1.1)",
            },
        },
        zoomedImage: {
            transition: "transform 0.3s ease-in-out",
            display: "block",
            width: "100%",
            height: "auto",
        },
    }),
)

// Avatar
export const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}))

export default useStyles
