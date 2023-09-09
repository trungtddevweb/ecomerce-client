import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Stack,
  Typography,
  Rating,
  Box,
} from "@mui/material";
import useStyles from "@/assets/styles";

const HotProducts = () => {
  const classes = useStyles();
  return (
    <Box className={classes.marginAuto} sx={{ mb: 6 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginBottom: 2 }}
      >
        <Typography variant="h5"> Sản phẩm hot</Typography>
        <Typography variant="h5"> Xem thêm</Typography>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={2.4}>
          <Card variant="outlined">
            <CardActionArea>
              <CardMedia
                sx={{}}
                component="img"
                image="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh6h9lci916a18_tn"
                alt="Paella dish"
              />
              <CardContent>
                <Typography className={classes.limitTitle} gutterBottom>
                  Áo Khoác Kéo Khoá Thể Thao, Áo Form Thụng To Form Unisex Cực
                  Trends
                </Typography>
                <Rating size="small" value={4} readOnly />

                <Stack direction="row" justifyContent="space-between">
                  <Typography color="error">200.000đ</Typography>
                  <Typography> Đã bán 10</Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={2.4}>
          <Card variant="outlined">
            <CardActionArea>
              <CardMedia
                sx={{}}
                component="img"
                image="https://down-vn.img.susercontent.com/file/d92e77cdb818c2abb6414792cfda2fd6"
                alt="Paella dish"
              />
              <CardContent>
                <Typography className={classes.limitTitle} gutterBottom>
                  Set đồ nam nữ form rộng unisex, áo polo khóa kéo kèm quần
                  short đùi thêu logo chất liệu cotton tổ ong nhiều màu
                </Typography>
                <Rating size="small" value={5} readOnly />
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="error">200.000đ</Typography>
                  <Typography> Đã bán 10</Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={2.4}>
          <Card variant="outlined">
            <CardActionArea>
              <CardMedia
                sx={{}}
                component="img"
                image="https://down-vn.img.susercontent.com/file/d8eceb8faa676bb4bfc67a4d8edd6074"
                alt="Paella dish"
              />
              <CardContent>
                <Typography className={classes.limitTitle} gutterBottom>
                  Áo Polo Teelab Special chất cá sấu thoáng mát co dãn 4c , áo
                  thun có cổ local brand nam nữ unisex form rộng
                </Typography>
                <Rating size="small" value={5} readOnly />
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="error">200.000đ</Typography>
                  <Typography> Đã bán 10</Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={2.4}>
          <Card variant="outlined">
            <CardActionArea>
              <CardMedia
                sx={{}}
                component="img"
                image="https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lerbn3slmd1m7f"
                alt="Paella dish"
              />
              <CardContent>
                <Typography className={classes.limitTitle} gutterBottom>
                  Áo thun cao cấp BBR Vintage nam nữ form rộng vải cotton 2
                  chiều
                </Typography>
                <Rating size="small" value={4} readOnly />
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="error">200.000đ</Typography>
                  <Typography> Đã bán 10</Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={2.4}>
          <Card variant="outlined">
            <CardActionArea>
              <CardMedia
                sx={{}}
                component="img"
                image="https://cf.shopee.vn/file/913b617bc02090f812c3df9e35d27a2f"
                alt="Paella dish"
              />
              <CardContent>
                <Typography className={classes.limitTitle} gutterBottom>
                  Áo khoác nam unisex cổ trụ vải dù nhật 2 lớp phong cách trường
                  học hàn quốc họa tiết chữ At7
                </Typography>
                <Rating size="small" value={5} readOnly />
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="error">200.000đ</Typography>
                  <Typography> Đã bán 10</Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HotProducts;
