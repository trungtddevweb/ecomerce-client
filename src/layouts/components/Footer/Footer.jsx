import { Copyright, Send } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  FormControl,
  Stack,
} from "@mui/material";
import useStyles from "@/assets/styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box component="footer" sx={{ backgroundColor: "#333", color: "white" }}>
      <Box className={classes.marginAuto}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h4" gutterBottom>
              Logo
            </Typography>
            <Typography>
              Đăng ký ngay để không bỏ lỡ những sản phẩm mới nhất của chúng tôi.
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <FormControl
                sx={{
                  marginY: 4,
                  padding: "0px",
                  backgroundColor: "white",
                  width: "100%",
                  borderRadius: "4px",
                }}
              >
                <TextField
                  type="email"
                  required
                  variant="outlined"
                  placeholder="Email của bạn..."
                  size="small"
                ></TextField>
              </FormControl>
              <Button variant="contained">
                <SendIcon />
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h5" gutterBottom>
              Liên hệ với chúng tôi
            </Typography>
            <Typography variant="body1" gutterBottom>
              <LocationOnIcon /> Gia Lâm, Hà Nội, Việt Nam
            </Typography>
            <Typography gutterBottom>
              <EmailIcon /> info@gmail.com
            </Typography>
            <Typography gutterBottom>
              <PhoneIcon /> 0352828651
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h5" gutterBottom>
              Giờ mở cửa
            </Typography>
            <Typography gutterBottom>Thứ 2 -Thứ 5: 8.am - 9.pm</Typography>
            <Typography gutterBottom>Thứ 6 - Thứ 7: 8.am - 1.am</Typography>
            <Typography gutterBottom>Chủ Nhật: 9.am - 10.pm</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" gutterBottom>
              Thông tin
            </Typography>
            <Typography gutterBottom>Giao hàng</Typography>
            <Typography gutterBottom>Sự kiện</Typography>
            <Typography gutterBottom>Chính sách và bảo mật</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
