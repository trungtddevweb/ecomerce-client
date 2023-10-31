import PropTypes from "prop-types"
import { Box, Paper, Stack, Typography } from "@mui/material"
import useStyles from "@/assets/styles"

const CardDashboard = ({ data }) => {
    const classes = useStyles()

    return (
        <Paper
            sx={{
                textAlign: "center",
                height: "100px",
                display: "flex",
                alignItems: "center",
                pl: 4,
                borderRadius: 6,
            }}
            elevation={4}
        >
            <Box
                width={40}
                height={40}
                sx={{
                    bgcolor: "rgba(126, 166, 161, 0.27)",
                    borderRadius: 3,
                    mr: 1,
                }}
                className={classes.flexBox}
            >
                {data.icon}
            </Box>
            <Stack>
                <Typography variant="body2" textAlign="left">
                    {data.number}
                </Typography>
                <Typography variant="caption" color={data.colorText}>
                    {data.label}
                </Typography>
            </Stack>
        </Paper>
    )
}

CardDashboard.propTypes = {
    data: PropTypes.object.isRequired,
}

export default CardDashboard
