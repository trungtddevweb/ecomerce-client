import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import useStyles from "@/assets/styles";

const Blogs = () => {
  const classes = useStyles();
  return (
    <Box className={classes.marginAuto} sx={{ py: 6 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginBottom: 2 }}
      >
        <Typography variant="h5"> Bài viết liên quan</Typography>
        <Typography variant="h5"> Xem thêm</Typography>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://cf.shopee.vn/file/913b617bc02090f812c3df9e35d27a2f"
                alt="img"
              />
              <CardContent>
                <Typography
                  variant="h6"
                  className={classes.limitTitle}
                  gutterBottom
                >
                  5 cách bắt kịp xu hướng giày búp bê phong cách vũ công đang
                  khiến các fashionista mê mệt
                </Typography>
                <Typography className={classes.limitLines} gutterBottom>
                  Ballet flats hay còn gọi là giày búp bê quen thuộc với tất cả
                  mọi người. Kiểu giày này mang đến sự nhẹ nhàng, uyển chuyển,
                  nữ tính và sự thoải mái trong mọi hoạt động của ngày dài. Giày
                  búp bê đế bệt ra đời như mang sứ mệnh giúp “giải phóng” đôi
                  chân và với khả năng biến hóa của các tín đồ sành điệu, đây
                  còn là món đồ để đa dạng phong cách hơn nữa. Đặc biệt năm nay
                  phong cách ballet-core đang lên ngôi thì những đôi giày này
                  lại càng có cơ hội phủ sóng.
                </Typography>
                <Typography align="right">05/09/2023</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://cf.shopee.vn/file/913b617bc02090f812c3df9e35d27a2f"
                alt="img"
              />
              <CardContent>
                <Typography
                  variant="h6"
                  className={classes.limitTitle}
                  gutterBottom
                >
                  5 cách bắt kịp xu hướng giày búp bê phong cách vũ công đang
                  khiến các fashionista mê mệt
                </Typography>
                <Typography className={classes.limitLines} gutterBottom>
                  Ballet flats hay còn gọi là giày búp bê quen thuộc với tất cả
                  mọi người. Kiểu giày này mang đến sự nhẹ nhàng, uyển chuyển,
                  nữ tính và sự thoải mái trong mọi hoạt động của ngày dài. Giày
                  búp bê đế bệt ra đời như mang sứ mệnh giúp “giải phóng” đôi
                  chân và với khả năng biến hóa của các tín đồ sành điệu, đây
                  còn là món đồ để đa dạng phong cách hơn nữa. Đặc biệt năm nay
                  phong cách ballet-core đang lên ngôi thì những đôi giày này
                  lại càng có cơ hội phủ sóng.
                </Typography>
                <Typography align="right">05/09/2023</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://cf.shopee.vn/file/913b617bc02090f812c3df9e35d27a2f"
                alt="img"
              />
              <CardContent>
                <Typography
                  variant="h6"
                  className={classes.limitTitle}
                  gutterBottom
                >
                  5 cách bắt kịp xu hướng giày búp bê phong cách vũ công đang
                  khiến các fashionista mê mệt
                </Typography>
                <Typography className={classes.limitLines} gutterBottom>
                  Ballet flats hay còn gọi là giày búp bê quen thuộc với tất cả
                  mọi người. Kiểu giày này mang đến sự nhẹ nhàng, uyển chuyển,
                  nữ tính và sự thoải mái trong mọi hoạt động của ngày dài. Giày
                  búp bê đế bệt ra đời như mang sứ mệnh giúp “giải phóng” đôi
                  chân và với khả năng biến hóa của các tín đồ sành điệu, đây
                  còn là món đồ để đa dạng phong cách hơn nữa. Đặc biệt năm nay
                  phong cách ballet-core đang lên ngôi thì những đôi giày này
                  lại càng có cơ hội phủ sóng.
                </Typography>
                <Typography align="right">05/09/2023</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://cf.shopee.vn/file/913b617bc02090f812c3df9e35d27a2f"
                alt="img"
              />
              <CardContent>
                <Typography
                  variant="h6"
                  className={classes.limitTitle}
                  gutterBottom
                >
                  5 cách bắt kịp xu hướng giày búp bê phong cách vũ công đang
                  khiến các fashionista mê mệt
                </Typography>
                <Typography className={classes.limitLines} gutterBottom>
                  Ballet flats hay còn gọi là giày búp bê quen thuộc với tất cả
                  mọi người. Kiểu giày này mang đến sự nhẹ nhàng, uyển chuyển,
                  nữ tính và sự thoải mái trong mọi hoạt động của ngày dài. Giày
                  búp bê đế bệt ra đời như mang sứ mệnh giúp “giải phóng” đôi
                  chân và với khả năng biến hóa của các tín đồ sành điệu, đây
                  còn là món đồ để đa dạng phong cách hơn nữa. Đặc biệt năm nay
                  phong cách ballet-core đang lên ngôi thì những đôi giày này
                  lại càng có cơ hội phủ sóng.
                </Typography>
                <Typography align="right">05/09/2023</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blogs;
