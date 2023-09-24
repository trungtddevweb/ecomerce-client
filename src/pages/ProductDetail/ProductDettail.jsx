import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  Button,
  Stack,
  TextField,
  Avatar,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
  CardContent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useStyles from "@/assets/styles";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useParams } from "react-router-dom";

const ProductDettail = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [value, setValue] = useState(1);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const handleChangeColor = (event, newAlignment) => {
    setSelectedColor(newAlignment);
  };
  const handleChangeSize = (event, newAlignment) => {
    setSelectedSize(newAlignment);
  };
  const handleImageHover = (image) => {
    setHoveredImage(image);
  };
  const addValue = () => {
    setValue(value + 1);
  };
  const minusValue = () => {
    value <= 1 ? setValue(1) : setValue(value - 1);
  };
  useEffect(() => {
    const callProductById = async () => {
      try {
        const res = await axios.get(
          `https://shopping-server-kx93.onrender.com/api/products/find/${id}`
        );
        console.log(res.data);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    callProductById();
  }, [id]);
  if (!product) return <></>;

  return (
    <Box sx={{ bgcolor: "#eee", py: 6 }}>
      <Box className={classes.marginAuto}>
        <Paper sx={{ mb: 8, padding: "16px" }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box mb={2}>
                <Card>
                  <CardMedia
                    component="img"
                    src={hoveredImage || product.productImages[0]}
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
                {product.productImages.map((productImage, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      onMouseEnter={() => handleImageHover(productImage)}
                      onMouseLeave={() => handleImageHover(null)}
                    >
                      <Card>
                        <CardMedia component="img" src={productImage} />
                      </Card>
                    </SwiperSlide>
                  );
                })}
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
                  {product.price}đ
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
                  required
                  value={selectedColor}
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
                <Typography>Kích thước:</Typography>
                <ToggleButtonGroup
                  color="primary"
                  value={selectedSize}
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
                <Typography>Số lượng:</Typography>
                <Typography> {product.quantity}</Typography>
                <Stack direction="row">
                  <Button variant="outlined" onClick={addValue}>
                    <AddIcon />
                  </Button>
                  <TextField
                    value={value}
                    type="number"
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value);
                      setValue(newValue);
                      console.log(newValue);
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

            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llqxujtqwusf50"
                    />
                    <CardContent>
                      <Typography className={classes.limitTitle} gutterBottom>
                        Áo Hoodie Zip FUNKY Xám Tiêu - Áo Khoác Nỉ Nam Nữ Mũ
                        Trùm Form Rộng Nỉ Cotton Cao Cấp
                      </Typography>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography color="error">200000đ</Typography>
                        <Typography>10</Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={2}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      src="https://down-vn.img.susercontent.com/file/08a33fb27df33917e350c0a163e04125"
                    />
                    <CardContent>
                      <Typography className={classes.limitTitle} gutterBottom>
                        Áo hoodies dài tay unisex SOZO in hình gấu - AO TOP NAM
                        90000203
                      </Typography>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography color="error">80000đ</Typography>
                        <Typography>10</Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={2}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      src="https://down-vn.img.susercontent.com/file/e9a1464780d98ef4ef9b9c32ce8e02b8"
                    />
                    <CardContent>
                      <Typography className={classes.limitTitle} gutterBottom>
                        Áo Khoác Hoodie Khủng Long Cực Chất sweater unisex Cao
                        cấp bền màu 1Kenz
                      </Typography>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography color="error">66000đ</Typography>
                        <Typography>10</Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={2}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llqvwo9hs5wf41"
                    />
                    <CardContent>
                      <Typography className={classes.limitTitle} gutterBottom>
                        Áo Hoodie Zip ALAI BEAR Form Rộng Mũ Trùm Vải Nỉ Bông
                        Cao Cấp , Áo Hoodie Nam Nữ Phong Cách hàn Quốc
                      </Typography>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography color="error">175000đ</Typography>
                        <Typography>10</Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={2}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      src="https://down-vn.img.susercontent.com/file/sg-11134201-22120-utqz1t5gaykvcd"
                    />
                    <CardContent>
                      <Typography className={classes.limitTitle} gutterBottom>
                        Áo hoodie Faruiline men417 22W Thời Trang Cá Tính Cho
                        Nam Nữ
                      </Typography>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography color="error">147000đ</Typography>
                        <Typography>10</Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        <Box>
          <Paper sx={{ padding: "16px" }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Đánh giá sản phẩm
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Avatar className={classes.avatar} sx={{ bgcolor: "orange" }}>
                T
              </Avatar>
              <Box>
                <Typography>Baki</Typography>
                <Typography gutterBottom>
                  08-08-2023 | Loại hàng: XANH LAM, M
                </Typography>
                <Typography>
                  Áo đẹp lắm!chất vải xịn,hình in sắc nét cực,giá rẻ mà chất
                  lượng quá,CHO SHOP 10đ
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Avatar className={classes.avatar} sx={{ bgcolor: "black" }}>
                A
              </Avatar>
              <Box>
                <Typography>Andy</Typography>
                <Typography gutterBottom>
                  12-08-2023 | Loại hàng: ĐEN, M,XL
                </Typography>
                <Typography>
                  Áo đẹp lắm!chất vải xịn,hình in sắc nét cực,giá rẻ mà chất
                  lượng quá,CHO SHOP 10đ
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Avatar className={classes.avatar} sx={{ bgcolor: "yellow" }}>
                C
              </Avatar>
              <Box>
                <Typography>Cold</Typography>
                <Typography gutterBottom>
                  01-09-2023 | Loại hàng: CAM, M,L,XL
                </Typography>
                <Typography>
                  Áo đẹp lắm!chất vải xịn,hình in sắc nét cực,giá rẻ mà chất
                  lượng quá,CHO SHOP 10đ
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Avatar className={classes.avatar} sx={{ bgcolor: "green" }}>
                T
              </Avatar>
              <Box>
                <Typography>Tâm</Typography>
                <Typography gutterBottom>
                  08-04-2022 | Loại hàng: XANH LAM,M
                </Typography>
                <Typography>
                  Áo đẹp lắm!chất vải xịn,hình in sắc nét cực,giá rẻ mà chất
                  lượng quá,CHO SHOP 10đ
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDettail;
