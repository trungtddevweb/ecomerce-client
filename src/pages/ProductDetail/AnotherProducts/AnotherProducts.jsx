import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material"
import useStyles from "@/assets/styles"

const AnotherProducts = () => {
  const classes = useStyles()

  return (
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
                Áo Hoodie Zip FUNKY Xám Tiêu - Áo Khoác Nỉ Nam Nữ Mũ Trùm Form
                Rộng Nỉ Cotton Cao Cấp
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
                Áo hoodies dài tay unisex SOZO in hình gấu - AO TOP NAM 90000203
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
                Áo Khoác Hoodie Khủng Long Cực Chất sweater unisex Cao cấp bền
                màu 1Kenz
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
                Áo Hoodie Zip ALAI BEAR Form Rộng Mũ Trùm Vải Nỉ Bông Cao Cấp ,
                Áo Hoodie Nam Nữ Phong Cách hàn Quốc
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
                Áo hoodie Faruiline men417 22W Thời Trang Cá Tính Cho Nam Nữ
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
  )
}

AnotherProducts.propTypes = {}

export default AnotherProducts
