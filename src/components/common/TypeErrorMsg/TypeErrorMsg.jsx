import PropTypes from "prop-types"
import { Typography } from "@mui/material"

const TypeErrorMsg = ({ message, color = "error" }) => {
    return (
        <Typography color={color} variant="subtitle2">
            {message}
        </Typography>
    )
}

TypeErrorMsg.propTypes = {
    message: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default TypeErrorMsg
