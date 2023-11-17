import { Box, TextField, Typography, Paper, Grid } from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton"
import { Fragment, useState } from "react"
import Seo from "@/components/feature/Seo"
import { showToast } from "@/redux/toastSlice"
import { useDispatch } from "react-redux"
import { changePassAPI } from "@/api/main"
import { useNavigate, useLocation } from "react-router-dom"

const ChangePass = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [loading, setLoading] = useState(false)
    const email = location.state?.email || null
    const [pass, setPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await changePassAPI({
                email,
                password: pass,
                confirmPassword: confirmPass,
            })
            dispatch(showToast({ type: "success", message: res.message }))
            navigate("/sign-in")
        } catch (error) {
            setLoading(false)
            dispatch(
                showToast({
                    type: "error",
                    message: error.response?.data.message,
                }),
            )
        }
    }

    return (
        <Fragment>
            <Seo
                title="May Store | Quên mật khẩu "
                description="Buy everything you need"
                type="webapp"
                name="May Store"
            />

            <Box
                component="form"
                className="h-screen flex items-center justify-center sm:px-2"
                onSubmit={handleSubmit}
            >
                <Paper
                    className="w-[500px] flex flex-col items-center justify-center overflow-hidden p-3"
                    elevation={4}
                >
                    <Typography
                        align="center"
                        variant="h6"
                        gutterBottom
                        paddingY={2}
                        color="primary"
                    >
                        Quên mật khẩu
                    </Typography>

                    <Typography gutterBottom mb={2}>
                        Vui lòng tạo mật khẩu mới!
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                type="password"
                                fullWidth
                                placeholder="Mật khẩu mới"
                                variant="outlined"
                                value={pass}
                                onChange={(e) => {
                                    setPass(e.target.value)
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                type="password"
                                fullWidth
                                placeholder="Xác nhận mật khẩu"
                                variant="outlined"
                                value={confirmPass}
                                onChange={(e) => {
                                    setConfirmPass(e.target.value)
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <LoadingButton
                                loading={loading}
                                type="submit"
                                variant="contained"
                                fullWidth
                            >
                                Tạo mật khẩu mới
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Fragment>
    )
}

export default ChangePass
