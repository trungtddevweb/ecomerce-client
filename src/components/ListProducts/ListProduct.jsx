import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@mui/material"
import TitleHeading from "@/components/feature/TitleHeading"
import useStyles from "@/assets/styles"

const ListProduct = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.marginAuto} py={5}>
                <Box sx={{ textAlign: "center", mb: 1 }}>
                    <TitleHeading title="Danh sách sản phẩm" />
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    src="https://vn-live-01.slatic.net/p/3c52e580676955c3cbe2765782b2d7f5.jpg"
                                />
                                <CardContent sx={{ bgcolor: "#297fb9" }}>
                                    <Box sx={{ textAlign: "center" }}>
                                        <Typography
                                            gutterBottom
                                            sx={{ color: "white" }}
                                        >
                                            Áo thun nam
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            size="small"
                                        >
                                            Xem thêm
                                        </Button>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    src="https://vn-live-01.slatic.net/p/3c52e580676955c3cbe2765782b2d7f5.jpg"
                                />
                                <CardContent sx={{ bgcolor: "#297fb9" }}>
                                    <Box sx={{ textAlign: "center" }}>
                                        <Typography
                                            gutterBottom
                                            sx={{ color: "white" }}
                                        >
                                            Áo thun nam
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            size="small"
                                        >
                                            Xem thêm
                                        </Button>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    src="https://vn-live-01.slatic.net/p/3c52e580676955c3cbe2765782b2d7f5.jpg"
                                />
                                <CardContent sx={{ bgcolor: "#297fb9" }}>
                                    <Box sx={{ textAlign: "center" }}>
                                        <Typography
                                            gutterBottom
                                            sx={{ color: "white" }}
                                        >
                                            Áo thun nam
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            size="small"
                                        >
                                            Xem thêm
                                        </Button>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ListProduct
