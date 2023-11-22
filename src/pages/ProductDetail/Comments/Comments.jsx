import { Avatar, Box, Paper, Stack, Typography } from "@mui/material"
import useStyles from "@/assets/styles"

const Comments = () => {
    const classes = useStyles()
    return (
        <Box>
            <Paper sx={{ padding: "16px" }}>
                <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                    Đánh giá sản phẩm
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Avatar
                        className={classes.avatar}
                        sx={{ bgcolor: "orange" }}
                    >
                        T
                    </Avatar>
                    <Box>
                        <Typography>Baki</Typography>
                        <Typography gutterBottom>
                            08-08-2023 | Loại hàng: XANH LAM, M
                        </Typography>
                        <Typography>
                            Áo đẹp lắm!chất vải xịn,hình in sắc nét cực,giá rẻ
                            mà chất lượng quá,CHO SHOP 10đ
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Avatar
                        className={classes.avatar}
                        sx={{ bgcolor: "black" }}
                    >
                        A
                    </Avatar>
                    <Box>
                        <Typography>Andy</Typography>
                        <Typography gutterBottom>
                            12-08-2023 | Loại hàng: ĐEN, M,XL
                        </Typography>
                        <Typography>
                            Áo đẹp lắm!chất vải xịn,hình in sắc nét cực,giá rẻ
                            mà chất lượng quá,CHO SHOP 10đ
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Avatar
                        className={classes.avatar}
                        sx={{ bgcolor: "yellow" }}
                    >
                        C
                    </Avatar>
                    <Box>
                        <Typography>Cold</Typography>
                        <Typography gutterBottom>
                            01-09-2023 | Loại hàng: CAM, M,L,XL
                        </Typography>
                        <Typography>
                            Áo đẹp lắm!chất vải xịn,hình in sắc nét cực,giá rẻ
                            mà chất lượng quá,CHO SHOP 10đ
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Avatar
                        className={classes.avatar}
                        sx={{ bgcolor: "green" }}
                    >
                        T
                    </Avatar>
                    <Box>
                        <Typography>Tâm</Typography>
                        <Typography gutterBottom>
                            08-04-2022 | Loại hàng: XANH LAM,M
                        </Typography>
                        <Typography>
                            Áo đẹp lắm!chất vải xịn,hình in sắc nét cực,giá rẻ
                            mà chất lượng quá,CHO SHOP 10đ
                        </Typography>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    )
}

Comments.propTypes = {}

export default Comments
