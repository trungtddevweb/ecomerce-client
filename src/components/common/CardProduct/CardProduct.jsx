import PropTypes from "prop-types"
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Stack,
    Rating,
} from "@mui/material"
import { Link } from "react-router-dom"
import useStyles from "@/assets/styles"
import { formatPrice } from "@/utils/format"

const CardProduct = ({ product }) => {
    const { price, sold, name, _id, rating } = product

    const totalRatingValue = rating.reduce(
        (accumulator, currentValue) => accumulator + currentValue.ratingValue,
        0,
    )
    const averageRating = Number(totalRatingValue / rating.length)

    const classes = useStyles()

    return (
        <Link to={`/products/${_id}`}>
            <Card variant="outlined">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        src={product?.productImages[0]}
                    />
                    <CardContent>
                        <Typography className={classes.limitTitle} gutterBottom>
                            {name}
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={0.5}
                            alignItems="center"
                        >
                            <Rating
                                size="small"
                                value={averageRating}
                                readOnly
                            />
                            <Typography variant="caption">
                                ({rating.length})
                            </Typography>
                        </Stack>

                        <Stack direction="row" justifyContent="space-between">
                            <Typography color="error">
                                {formatPrice(price)}đ
                            </Typography>
                            <Typography>Đã bán {sold}</Typography>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object.isRequired,
}

export default CardProduct
