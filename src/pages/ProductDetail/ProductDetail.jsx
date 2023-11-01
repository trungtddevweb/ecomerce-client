import { useState } from "react"
import {
    Box,
    Grid,
    Typography,
    Card,
    CardMedia,
    Button,
    Stack,
    TextField,
    Paper,
    ToggleButtonGroup,
    ToggleButton,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Swiper, SwiperSlide } from "swiper/react"
import { useLoaderData } from "react-router-dom"
import { Navigation, Autoplay } from "swiper/modules"
import { useSearchParams } from "react-router-dom"

import useStyles from "@/assets/styles"
import AnotherProducts from "./AnotherProducts"
import Comments from "./Comments"

const ProductDettail = () => {
    const product = useLoaderData()
    const classes = useStyles()
    const [search, setSearch] = useSearchParams()
    const color = search.get("color")
    const size = search.get("size")
    const quantity = parseInt(search.get("quantity") || 1)
    const [hoveredImage, setHoveredImage] = useState(null)

    // Handlers
    const handleChangeColor = (event, newAlignment) => {
        setSearch(
            (prev) => {
                prev.set("color", newAlignment)
                return prev
            },
            { replace: true },
        )
    }
    const handleChangeSize = (event, newAlignment) => {
        setSearch(
            (prev) => {
                prev.set("size", newAlignment)
                return prev
            },
            { replace: true },
        )
    }
    const handlequantity = (e) => {
        const newValue = parseInt(e.target.value)
        setSearch(
            (prev) => {
                prev.set("quantity", newValue)
                return prev
            },
            { replace: true },
        )
    }
    const handleImageHover = (image) => {
        setHoveredImage(image)
    }
    const addValue = () => {
        setSearch(
            (prev) => {
                prev.set("quantity", quantity + 1)
                return prev
            },
            { replace: true },
        )
    }
    const minusValue = () => {
        quantity <= 1
            ? setSearch(
                  (prev) => {
                      prev.set("quantity", 1)
                      return prev
                  },
                  { replace: true },
              )
            : setSearch(
                  (prev) => {
                      prev.set("quantity", quantity - 1)
                      return prev
                  },
                  { replace: true },
              )
    }

    return (
        <Box className={classes.marginAuto} mt={10}>
            <Paper sx={{ mb: 8, padding: "16px" }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Box mb={2}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    src={
                                        hoveredImage || product.productImages[0]
                                    }
                                />
                            </Card>
                        </Box>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation
                            autoplay
                            spaceBetween={0}
                            slidesPerView={4}
                        >
                            {product.productImages.map(
                                (productImage, index) => {
                                    return (
                                        <SwiperSlide
                                            key={index}
                                            onMouseEnter={() =>
                                                handleImageHover(productImage)
                                            }
                                            onMouseLeave={() =>
                                                handleImageHover(null)
                                            }
                                        >
                                            <Card>
                                                <CardMedia
                                                    sx={{ height: "100%" }}
                                                    component="img"
                                                    src={productImage}
                                                />
                                            </Card>
                                        </SwiperSlide>
                                    )
                                },
                            )}
                        </Swiper>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="h5"
                            sx={{ mb: 4 }}
                            className={classes.limitTitle}
                        >
                            {product.name}
                        </Typography>
                        <Typography
                            sx={{ mb: 3, minHeight: "96px" }}
                            className={classes.limitDesc}
                        >
                            {product.desc}
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                            sx={{ mb: 3 }}
                        >
                            <Typography sx={{ width: "20%" }}>Giá:</Typography>
                            <Typography color="error" variant="h4">
                                {product.price}đ
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            sx={{ mb: 3 }}
                            spacing={2}
                            alignItems="center"
                        >
                            <Typography sx={{ width: "20%" }}>
                                Màu sắc:
                            </Typography>

                            <ToggleButtonGroup
                                color="primary"
                                required
                                value={color}
                                exclusive
                                onChange={handleChangeColor}
                                aria-label="Select color"
                            >
                                {product.colors?.map((color) => (
                                    <ToggleButton key={color} value={color}>
                                        {color}
                                    </ToggleButton>
                                ))}
                            </ToggleButtonGroup>
                        </Stack>

                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ mb: 3 }}
                            alignItems="center"
                        >
                            <Typography sx={{ width: "20%" }}>
                                Kích thước:
                            </Typography>
                            <ToggleButtonGroup
                                color="primary"
                                value={size}
                                exclusive
                                onChange={handleChangeSize}
                                aria-label="Select Size"
                            >
                                {product.sizes?.map((size) => (
                                    <ToggleButton key={size} value={size}>
                                        {size}
                                    </ToggleButton>
                                ))}
                            </ToggleButtonGroup>
                        </Stack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            sx={{ mb: 4 }}
                            spacing={2}
                        >
                            <Typography sx={{ width: "20%" }}>
                                Số lượng:
                            </Typography>
                            <Stack direction="row" sx={{ width: "200px" }}>
                                <Button variant="outlined" onClick={addValue}>
                                    <AddIcon />
                                </Button>
                                <TextField
                                    value={quantity}
                                    type="number"
                                    onChange={handlequantity}
                                />
                                <Button variant="outlined" onClick={minusValue}>
                                    <RemoveIcon />
                                </Button>
                            </Stack>
                            <Typography>
                                {product.quantity} sản phẩm có sẵn
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={2} alignItems="center">
                            <Button variant="outlined" size="large">
                                Thêm vào giỏ hàng <ShoppingCartIcon />
                            </Button>
                            <Button variant="contained" size="large">
                                Mua ngay
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography mb={2} variant="h5">
                        Sản phẩm liên quan
                    </Typography>
                    <AnotherProducts />
                </Box>
            </Paper>
            <Comments productId={product._id} comments={product.comments} />
        </Box>
    )
}

export default ProductDettail
