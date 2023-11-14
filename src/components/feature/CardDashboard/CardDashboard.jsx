import PropTypes from "prop-types"
import { Box, LinearProgress, Paper, Stack, Typography } from "@mui/material"
import useStyles from "@/assets/styles"
import useFetch from "@/hooks/useFetch"

const CardDashboard = ({ item }) => {
    const classes = useStyles()
    const { data, loading } = useFetch(`/dashboard/${item.fetchUrl}`)
    console.log("data=====>", data?.totalDocs)
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
                {item.icon}
            </Box>
            <Stack>
                {loading ? (
                    <Box m={1}>
                        <LinearProgress />
                    </Box>
                ) : (
                    <Typography variant="body2" textAlign="left">
                        {item.number}
                    </Typography>
                )}
                <Typography variant="caption" color={item.colorText}>
                    {item.label}
                </Typography>
            </Stack>
        </Paper>
    )
}

CardDashboard.propTypes = {
    item: PropTypes.object.isRequired,
}

export default CardDashboard
