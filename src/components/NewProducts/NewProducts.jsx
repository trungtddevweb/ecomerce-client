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
} from "@mui/material";
import useStyles from "@/assets/styles";

const NewProducts = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.marginAuto} sx={{ paddingY: 6 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Sản phẩm mới
        </Typography>
        <Grid container spacing={2}>
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
                    Áo khoác nam unisex cổ trụ vải dù nhật 2 lớp phong cách
                    trường học hàn quốc họa tiết chữ At7
                  </Typography>
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
                  image="https://down-vn.img.susercontent.com/file/d44438a2405260e2855078cceaa01d44"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.limitTitle} gutterBottom>
                    BST áo thun mùa hè thời trang nam cotton vải dày mịn
                  </Typography>
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
                  image="https://down-vn.img.susercontent.com/file/sg-11134201-23010-4lf5qy11t4lv9a"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.limitTitle} gutterBottom>
                    Áo khoác nam cổ trụ vải dù 2 lớp phong cách trường học hàn
                    quốc họa tiết thêu chữ adapisl D62
                  </Typography>
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
                  image="https://down-vn.img.susercontent.com/file/sg-11134201-23010-j0cd4ogvivlvd5"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.limitTitle} gutterBottom>
                    Áo sơ mi kiểu dáng basic TOPMEN chất vải kaki cao cấp nam nữ
                  </Typography>
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
                  image="https://down-vn.img.susercontent.com/file/03c4673b4f66d4a5abb388ee30a88bf0"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.limitTitle} gutterBottom>
                    Áo khoác nam unisex cổ đứng vải dù 2 lớp phối màu độc lạ họa
                    tiết chữ RESUAPRE đi mưa,cản gió,chống nắng BẢO ĐĂNG
                  </Typography>
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
                  image="https://down-vn.img.susercontent.com/file/514ae455b4fd0d0102db496ee30ddafb"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.limitTitle} gutterBottom>
                    Áo khoác cadigan nam nữ chất cotton tổ ong cao cấp, dễ mặc
                    dễ phối đồ, hợp mọi thời đại
                  </Typography>
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
                  image="https://down-vn.img.susercontent.com/file/d5666c4f3a15ff48aecb25a96fb67563"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.limitTitle} gutterBottom>
                    ÁO KHOÁC JEANS BÒ DENIM JACKET FASHION UNISEX
                  </Typography>
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
                  image="https://down-vn.img.susercontent.com/file/78611d8fce4c7671c4a7c967c018e652"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.limitTitle} gutterBottom>
                    Size lớn 95kg, Quần Short Jean Cotton Nam Vải Không Co Dãn,
                    Đơn Giản Năng Động [Tnhung]
                  </Typography>
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
                  image="https://down-vn.img.susercontent.com/file/sg-11134201-22120-cll4309qzdlv7d"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.limitTitle} gutterBottom>
                    Quần nam jean đen ống suông rộng, quần baggy nam dáng đứng
                    chất vải bò cao cấp DRSQUARE hottrend 2022
                  </Typography>
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
                  image="https://down-vn.img.susercontent.com/file/884a7ea928d802827ded78167e3173f3"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.limitTitle} gutterBottom>
                    Áo polo nam MATANO có cổ trụ bẻ dệt sọc và họa tiết đẹp nổi
                    bật, thể hiện cá tính, vải cá sấu cotton phom suông
                  </Typography>
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
                  image="https://down-vn.img.susercontent.com/file/4c9c05be289167e68918129445b2650b"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.limitTitle} gutterBottom>
                    ÁO KHOÁC KAKI JEAN NAM ĐẸP THỜI TRANG MỚI NHẤT 2019 KKN01
                  </Typography>
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
                  image="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lffan0mt5i8477"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.limitTitle} gutterBottom>
                    Quần Jogger Nam KAKI CAO CẤP Quần Kaki Nam ống bo chun Kiểu
                    Dáng Hàn trẻ trung Mã JK11
                  </Typography>
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
                  image="https://down-vn.img.susercontent.com/file/70d393849ed7e2731fd3f9b54aaa4339"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.limitTitle} gutterBottom>
                    QUẦN SHORT KAKI NAM CO GIÃN CAO CẤP BẢNG MÀU PASTEL CỰC HOT
                  </Typography>
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
                    Áo khoác nam unisex cổ trụ vải dù nhật 2 lớp phong cách
                    trường học hàn quốc họa tiết chữ At7
                  </Typography>
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
                  image="https://down-vn.img.susercontent.com/file/b8d421201dd2403704580aeab7be316e"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography className={classes.limitTitle} gutterBottom>
                    Áo khoác dù Line Track Jacket Symbolic
                  </Typography>
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
    </div>
  );
};

export default NewProducts;
