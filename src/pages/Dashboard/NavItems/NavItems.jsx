import PropTypes from "prop-types"
import { useRef, useState } from "react"
import {
    ListItemIcon,
    MenuItem,
    MenuList,
    useColorScheme,
    Typography,
} from "@mui/material"
import { navItemsDashboard } from "@/utils/components"
import { Link } from "react-router-dom"

const NavItems = ({ setTag }) => {
    const [isActive, setIsActive] = useState(navItemsDashboard[0].value)
    const scheme = useColorScheme()
    const ref = useRef()

    const handleClick = (value) => {
        setIsActive(value)
        setTag(value)
    }

    return (
        <MenuList>
            {navItemsDashboard.map((item) => (
                <Link key={item.label} to={`/dashboard/${item.slug}`}>
                    <MenuItem
                        ref={ref}
                        sx={{
                            py: 2,
                            borderRadius: 4,
                        }}
                        className={
                            isActive === item.value
                                ? scheme.mode === "dark"
                                    ? "active-dark"
                                    : "active-light"
                                : " "
                        }
                        onClick={() => handleClick(item.value)}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <Typography color="primary">{item.label}</Typography>
                    </MenuItem>
                </Link>
            ))}
        </MenuList>
    )
}

NavItems.propTypes = {
    setTag: PropTypes.func.isRequired,
}

export default NavItems
