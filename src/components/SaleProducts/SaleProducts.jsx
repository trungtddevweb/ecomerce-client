import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
  Stack,
  Rating,
  Paper,
} from "@mui/material";
import useStyles from "@/assets/styles";

const SaleProducts = () => {
  const classes = useStyles();
  return (
    <Box className={classes.marginAuto} sx={{ mb: 6 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginBottom: 2 }}
      >
        <Typography variant="h5"> Sản phẩm sale</Typography>
        <Typography variant="h5"> Xem thêm</Typography>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={2.4} sx={{ position: "relative" }}>
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
                <Rating size="small" value={4} readOnly />

                <Stack direction="row" justifyContent="space-between">
                  <Typography color="error">150.000đ</Typography>
                  <Typography> Đã bán 10</Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "yellow",
              textAlign: "center",
              padding: "6px",
              position: "absolute",
              top: "16px",
              right: 0,
              borderTopRightRadius: "4px",
            }}
            square
          >
            <Typography color="error" sx={{ fontWeight: "bold" }}>
              Giảm
              <Typography color="error" variant="h6">
                25%
              </Typography>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2.4} sx={{ position: "relative" }}>
          <Card variant="outlined">
            <CardActionArea>
              <CardMedia
                sx={{}}
                component="img"
                image="https://cf.shopee.vn/file/4cd4f822d02d3bd7f198d83ba78c1f07_tn"
                alt="Paella dish"
              />
              <CardContent>
                <Typography className={classes.limitTitle} gutterBottom>
                  Áo phông tay lỡ form rộng nam nữ unisex chữ WHEN EVER vải dày
                  mịn
                </Typography>
                <Rating size="small" value={5} readOnly />

                <Stack direction="row" justifyContent="space-between">
                  <Typography color="error">150.000đ</Typography>
                  <Typography> Đã bán 10</Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "yellow",
              textAlign: "center",
              padding: "6px",
              position: "absolute",
              top: "16px",
              right: 0,
              borderTopRightRadius: "4px",
            }}
            square
          >
            <Typography color="error" sx={{ fontWeight: "bold" }}>
              Giảm
              <Typography color="error" variant="h6">
                25%
              </Typography>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2.4} sx={{ position: "relative" }}>
          <Card variant="outlined">
            <CardActionArea>
              <CardMedia
                sx={{}}
                component="img"
                image="https://cf.shopee.vn/file/743050d3c10a59f1b911810ead366116"
                alt="Paella dish"
              />
              <CardContent>
                <Typography className={classes.limitTitle} gutterBottom>
                  Áo Polo Nam Cổ Bẻ Thun Basic Cộc Tay Chất Cotton Co Dãn Thoáng
                  Mát Phong Cách Trẻ Trung Thời Trang Zenkonu TOP NAM 230
                </Typography>
                <Rating size="small" value={5} readOnly />

                <Stack direction="row" justifyContent="space-between">
                  <Typography color="error">150.000đ</Typography>
                  <Typography> Đã bán 10</Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "yellow",
              textAlign: "center",
              padding: "6px",
              position: "absolute",
              top: "16px",
              right: 0,
              borderTopRightRadius: "4px",
            }}
            square
          >
            <Typography color="error" sx={{ fontWeight: "bold" }}>
              Giảm
              <Typography color="error" variant="h6">
                25%
              </Typography>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2.4} sx={{ position: "relative" }}>
          <Card variant="outlined">
            <CardActionArea>
              <CardMedia
                sx={{}}
                component="img"
                image="https://cf.shopee.vn/file/sg-11134201-23020-5qt3fytqh4mv13"
                alt="Paella dish"
              />
              <CardContent>
                <Typography className={classes.limitTitle} gutterBottom>
                  Áo khoác nam unisex cổ trụ vải dù nhật 2 lớp phong cách trường
                  học hàn quốc họa tiết chữ At7
                </Typography>
                <Rating size="small" value={4} readOnly />

                <Stack direction="row" justifyContent="space-between">
                  <Typography color="error">150.000đ</Typography>
                  <Typography> Đã bán 10</Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "yellow",
              textAlign: "center",
              padding: "6px",
              position: "absolute",
              top: "16px",
              right: 0,
              borderTopRightRadius: "4px",
            }}
            square
          >
            <Typography color="error" sx={{ fontWeight: "bold" }}>
              Giảm
              <Typography color="error" variant="h6">
                25%
              </Typography>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2.4} sx={{ position: "relative" }}>
          <Card variant="outlined">
            <CardActionArea>
              <CardMedia
                sx={{}}
                component="img"
                image="https://cf.shopee.vn/file/vn-11134201-7qukw-lhedi18w32nm3d"
                alt="Paella dish"
              />
              <CardContent>
                <Typography className={classes.limitTitle} gutterBottom>
                  Áo thun Tia Sét, chất Cotton Co Giãn 4 Chiều -Hàng Hot Trend
                  2023
                </Typography>
                <Rating size="small" value={5} readOnly />

                <Stack direction="row" justifyContent="space-between">
                  <Typography color="error">150.000đ</Typography>
                  <Typography> Đã bán 10</Typography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "yellow",
              textAlign: "center",
              padding: "6px",
              position: "absolute",
              top: "16px",
              right: 0,
              borderTopRightRadius: "4px",
            }}
            square
          >
            <Typography color="error" sx={{ fontWeight: "bold" }}>
              Giảm
              <Typography color="error" variant="h6">
                25%
              </Typography>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SaleProducts;
