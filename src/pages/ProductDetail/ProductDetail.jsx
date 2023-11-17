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
import { useLoaderData, useSearchParams } from "react-router-dom"
import { Navigation, Autoplay } from "swiper/modules"

import useStyles from "@/assets/styles"
import AnotherProducts from "./AnotherProducts"
import Comments from "./Comments"

const ProductDettail = () => {
    const product = useLoaderData()
    const classes = useStyles()
    const [searchParams, setSearchParams] = useSearchParams()
    const [hoveredImage, setHoveredImage] = useState(null)

    const color = searchParams.get("color")
    const size = searchParams.get("size")
    const inputValue = parseInt(searchParams.get("inputValue") || 1)

    // Handlers
    const handleChangeColor = (event, newAlignment) => {
        setSearchParams(
            (prev) => {
                prev.set("color", newAlignment)
                return prev
            },
            { replace: true },
        )
    }
    const handleChangeSize = (event, newAlignment) => {
        setSearchParams(
            (prev) => {
                prev.set("size", newAlignment)
                return prev
            },
            { replace: true },
        )
    }
    const handleImageHover = (image) => {
        setHoveredImage(image)
    }
    const addValue = () => {
        setSearchParams(
            (prev) => {
                prev.set("inputValue", inputValue + 1)
                return prev
            },
            { replace: true },
        )
    }
    const minusValue = () => {
        inputValue <= 1
            ? setSearchParams(
                  (prev) => {
                      prev.set("inputValue", 1)
                      return prev
                  },
                  { replace: true },
              )
            : setSearchParams(
                  (prev) => {
                      prev.set("inputValue", inputValue - 1)
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
                                {product.price.toLocaleString("vi-VN")}đ
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
                            <Typography> {product.quantity}</Typography>
                            <Stack direction="row">
                                <Button variant="outlined" onClick={addValue}>
                                    <AddIcon />
                                </Button>
                                <TextField
                                    value={inputValue}
                                    type="number"
                                    onChange={(e) => {
                                        const newValue = parseInt(
                                            e.target.value,
                                        )
                                        setSearchParams(
                                            (prev) => {
                                                prev.set("inputValue", newValue)
                                                return prev
                                            },
                                            { replace: true },
                                        )
                                    }}
                                />
                                <Button variant="outlined" onClick={minusValue}>
                                    <RemoveIcon />
                                </Button>
                            </Stack>
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
            <Comments />
        </Box>
    )
}

export default ProductDettail
