import {
    Avatar,
    Box,
    Paper,
    Stack,
    Typography,
    Button,
    TextField,
} from "@mui/material"
import useStyles from "@/assets/styles"
import dayjs from "dayjs"
import { createCommentAPI } from "@/api/main"
import { useState } from "react"
import PropTypes from "prop-types"

const Comments = ({ productId, comments }) => {
    const classes = useStyles()
    const fakeDate = dayjs().date()
    const fakeMonth = dayjs().month() + 1
    const fakeYear = dayjs().year()
    const [content, setContent] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await createCommentAPI({
                productId,
                content,
            })
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

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
                            {fakeDate}-{fakeMonth}-{fakeYear} | Loại hàng: XANH
                            LAM, M
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
                            {fakeDate}-{fakeMonth}-{fakeYear} | Loại hàng: ĐEN,
                            M,XL
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
                            {fakeDate}-{fakeMonth}-{fakeYear} | Loại hàng: CAM,
                            M,L,XL
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
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        placeholder="noi dung"
                        value={content}
                        onChange={(e) => {
                            setContent(e.target.value)
                            console.log(e.target.value)
                        }}
                        required
                    />
                    <Button type="submit" variant="contained">
                        Submit
                    </Button>
                </Box>
                {comments.map((comment) => {
                    return (
                        <Typography key={comment._id}>
                            {comment.content}
                        </Typography>
                    )
                })}
            </Paper>
        </Box>
    )
}

Comments.propTypes = {
    productId: PropTypes.string.isRequired,
    comments: PropTypes.array,
}

export default Comments
