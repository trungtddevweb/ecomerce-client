import { useState } from "react"
import { Avatar, Box, Paper, Stack, Typography, TextField } from "@mui/material"
import useFetch from "@/hooks/useFetch"
import PropTypes from "prop-types"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { createCommentAPI } from "@/api/main"

const Comments = ({ productId, comments }) => {
    dayjs.extend(relativeTime)
    const [comment, setComment] = useState(comments)
    console.log(comment)
    const { data, loading, error } = useFetch(`/comment/${productId}`)
    console.log(comments)
    // if (error) return <Box>error</Box>

    const user = useSelector((state) => state.auth.user)
    const { accessToken } = user
    const [commentVal, setCommentVal] = useState("")

    const handleComment = async (e) => {
        e.preventDefault()
        const trimmedValue = commentVal.trim()
        if (trimmedValue === "") {
            return
        }
        const res = await createCommentAPI({
            content: commentVal,
            productId,
        })
        console.log(res)
        if (res.status === 201) {
            setComment([...comment, res.data])
            setCommentVal("")
        }
    }
    return (
        <Box>
            <Paper sx={{ padding: "16px" }}>
                <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                    Bình luận sản phẩm
                </Typography>
                {accessToken ? (
                    <Box component="form" onSubmit={handleComment}>
                        <TextField
                            type="text"
                            required
                            placeholder="Bình luận sản phẩm"
                            fullWidth
                            variant="standard"
                            value={commentVal}
                            onChange={(e) => {
                                {
                                    setCommentVal(e.target.value)
                                    console.log(e.target.value)
                                }
                            }}
                        />
                    </Box>
                ) : (
                    <Box sx={{ textAlign: "center" }}>
                        <Link to="/sign-in">
                            <Typography color="primary" component="span">
                                Đăng nhập
                            </Typography>
                            để bình luận
                        </Link>
                    </Box>
                )}

                {data &&
                    data.docs.map((item) => {
                        return (
                            <Box key={item._id} py={1}>
                                <Stack direction="row" spacing={2}>
                                    <Avatar />
                                    <Box>
                                        <Paper
                                            elevation={3}
                                            sx={{ borderRadius: "20px" }}
                                        >
                                            <Typography p={2}>
                                                {item.content}
                                            </Typography>
                                        </Paper>
                                        <Typography mt={1}>
                                            {dayjs(item.createdAt)
                                                .locale("vi")
                                                .fromNow()}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        )
                    })}
            </Paper>
        </Box>
    )
}

Comments.propTypes = {
    productId: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    setComments: PropTypes.func.isRequired,
}

export default Comments
