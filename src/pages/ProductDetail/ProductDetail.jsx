import { useState } from "react"
import {
    Box,
    Grid,
    Typography,
    Card,
    CardMedia,
    Button,
    Stack,
    Paper,
    ToggleButtonGroup,
    ToggleButton,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Swiper, SwiperSlide } from "swiper/react"
import { useLoaderData, useNavigate } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import { Navigation, Autoplay } from "swiper/modules"

import useStyles from "@/assets/styles"
import AnotherProducts from "./AnotherProducts"
import Comments from "./Comments"
import Seo from "@/components/feature/Seo"
import { formatPrice } from "@/utils/format"
import { addProductToCartAPI } from "@/api/main"
import { useDispatch, useSelector } from "react-redux"
import { showToast } from "@/redux/toastSlice"
import { pathRoutes } from "@/utils/const"
import CustomDialog from "@/components/feature/CustomDialog"
import { addProductToCart } from "@/redux/userSlice"

const ProductDettail = () => {
    const product = useLoaderData()
    console.log(product.comments)
    const classes = useStyles()
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams()
    const [hoveredImage, setHoveredImage] = useState(null)
    const [open, setOpen] = useState(false)

    // const [infoProduct, setInfoProduct] = useState({
    //     color: "",
    //     size: "",
    //     quantity: 1,
    // })

    // // Handlers
    // const handleChangeValue = (event, name) => {
    //     const { value } = event.target
    //     setInfoProduct((prev) => ({ ...prev, [name]: value }))
    // }

    // const handleChangeQuantity = (type) => {
    //     setInfoProduct((prev) => ({
    //         ...prev,
    //         quantity:
    //             type === "increase" ? prev.quantity + 1 : prev.quantity - 1,
    //     }))
    // }

    const initialInfoProduct = {
        color: searchParams.get("color") || "",
        size: searchParams.get("size") || "",
        quantity: parseInt(searchParams.get("quantity")) || 1,
    }

    const [infoProduct, setInfoProduct] = useState(initialInfoProduct)

    // Handlers
    const handleChangeValue = (event, name) => {
        const { value } = event.target
        setInfoProduct((prev) => {
            const newInfoProduct = { ...prev, [name]: value }

            // Update URL parameters
            setSearchParams(new URLSearchParams(newInfoProduct), {
                replace: true,
            })

            return newInfoProduct
        })
    }

    const handleChangeQuantity = (type) => {
        setInfoProduct((prev) => {
            const newQuantity =
                type === "increase" ? prev.quantity + 1 : prev.quantity - 1
            const newInfoProduct = { ...prev, quantity: newQuantity }

            // Update URL parameters
            setSearchParams(new URLSearchParams(newInfoProduct), {
                replace: true,
            })

            return newInfoProduct
        })
    }

    // Modal
    const handleClose = () => {
        setOpen(false)
    }

    const onConfirm = () => {
        navigate(`/${pathRoutes.signIn}`)
    }

    const handleAddProductToCart = async () => {
        if (isLoggedIn) {
            try {
                const payload = {
                    ...infoProduct,
                    productId: product._id,
                }
                const response = await addProductToCartAPI(payload)
                if (response.status === 200) {
                    dispatch(addProductToCart(response.data))
                }
            } catch (error) {
                dispatch(
                    showToast({
                        type: "error",
                        message: `Có lỗi xảy ra ${error}`,
                    }),
                )
            }
        } else {
            setOpen(true)
        }
    }

    const handleBuyProduct = async () => {
        if (isLoggedIn) {
            try {
                const payload = {
                    ...infoProduct,
                    productId: product._id,
                }
                const response = await addProductToCartAPI(payload)
                if (response.status === 200) {
                    navigate(`${pathRoutes.cart}`)
                }
            } catch (error) {
                dispatch(
                    showToast({
                        type: "error",
                        message: "Có lỗi xảy ra",
                    }),
                )
            }
        } else {
            setOpen(true)
        }
    }

    const handleImageHover = (image) => {
        setHoveredImage(image)
    }

    return (
        <>
            <Seo title={product.name} />
            <Box className={classes.marginAuto}>
                <Paper sx={{ mb: 8, padding: "16px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Box mb={2}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        src={
                                            hoveredImage ||
                                            product.productImages[0]
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
                                                    handleImageHover(
                                                        productImage,
                                                    )
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
                                <Typography>Giá:</Typography>
                                <Typography color="error" variant="h4">
                                    {formatPrice(product.price)} đ
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                sx={{ mb: 3 }}
                                spacing={2}
                                alignItems="center"
                            >
                                <Typography>Màu sắc:</Typography>

                                <ToggleButtonGroup
                                    color="primary"
                                    name="color"
                                    required
                                    value={initialInfoProduct.color}
                                    exclusive
                                    onChange={(event) =>
                                        handleChangeValue(event, "color")
                                    }
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
                                <Typography>Kích thước:</Typography>
                                <ToggleButtonGroup
                                    color="primary"
                                    value={initialInfoProduct.size}
                                    exclusive
                                    onChange={(event) =>
                                        handleChangeValue(event, "size")
                                    }
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
                                <Typography>Số lượng:</Typography>
                                <Stack direction="row">
                                    <Button
                                        variant="outlined"
                                        disabled={
                                            initialInfoProduct.quantity <= 1
                                        }
                                        onClick={() =>
                                            handleChangeQuantity("decrease")
                                        }
                                    >
                                        <RemoveIcon />
                                    </Button>
                                    <Box
                                        px={4}
                                        py={1}
                                        border="1px solid lightgray"
                                    >
                                        <Typography color="primary">
                                            {infoProduct.quantity}
                                        </Typography>
                                    </Box>

                                    <Button
                                        variant="outlined"
                                        disabled={
                                            infoProduct.quantity >=
                                            product.quantity
                                        }
                                        onClick={() =>
                                            handleChangeQuantity("increase")
                                        }
                                    >
                                        <AddIcon />
                                    </Button>
                                </Stack>
                            </Stack>
                            <Typography
                                variant="subtitle2"
                                color="GrayText"
                                fontStyle="italic"
                                mb={3}
                            >
                                Số sản phẩm còn lại trong kho {product.quantity}
                            </Typography>

                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                            >
                                <Button
                                    variant="outlined"
                                    size="large"
                                    onClick={handleAddProductToCart}
                                    disabled={
                                        infoProduct.quantity === 0 ||
                                        infoProduct.color === "" ||
                                        infoProduct.size === ""
                                    }
                                >
                                    Thêm vào giỏ hàng <ShoppingCartIcon />
                                </Button>
                                <Button
                                    variant="contained"
                                    size="large"
                                    disabled={
                                        infoProduct.quantity === 0 ||
                                        infoProduct.color === "" ||
                                        infoProduct.size === ""
                                    }
                                    onClick={handleBuyProduct}
                                >
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
                <CustomDialog
                    open={open}
                    onClose={handleClose}
                    onConfirm={onConfirm}
                />
            </Box>
        </>
    )
}

export default ProductDettail
