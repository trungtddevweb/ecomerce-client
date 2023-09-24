import PropTypes from "prop-types"
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Grid,
    Stack,
} from "@mui/material"
import { Link } from "react-router-dom"
import useStyles from "@/assets/styles"

const CardProduct = ({ product }) => {
    const { price, sold, name, _id } = product
    const classes = useStyles()

    return (
        <Grid container spacing={2}>
            <Grid item xs={2.4}>
                <Link to={`/products/${_id}`}>
                    <Card variant="outlined">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                src={product?.productImages[0]}
                            />
                            <CardContent>
                                <Typography
                                    className={classes.limitTitle}
                                    gutterBottom
                                >
                                    {name}
                                </Typography>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                >
                                    <Typography color="error">
                                        {price}đ
                                    </Typography>
                                    <Typography>{sold}</Typography>
                                </Stack>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Grid>
        </Grid>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object.isRequired,
}

export default CardProduct
