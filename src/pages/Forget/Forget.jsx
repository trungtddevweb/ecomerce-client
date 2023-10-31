import {
    Box,
    Grid,
    FormControl,
    Paper,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
    Stepper,
    Step,
    StepLabel,
    Button,
} from "@mui/material"
import { LoadingButton } from "@mui/lab"
import { Controller, useForm } from "react-hook-form"
import { object, string } from "yup"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import Image from "mui-image"
import SecurityIcon from "@mui/icons-material/Security"
import SendIcon from "@mui/icons-material/Send"
import { yupResolver } from "@hookform/resolvers/yup"
import { Fragment, useState } from "react"

import logo from "@/assets/images/logo.png"
import loginBg from "@/assets/images/bg-login.jpg"

import TypeErrorMsg from "@/components/common/TypeErrorMsg"
import { ErrorMessage } from "@hookform/error-message"
import { signUpAPI } from "@/api/main"
import { showToast } from "@/redux/toastSlice"
import Seo from "@/components/feature/Seo"
import { MuiOtpInput } from "mui-one-time-password-input"

const Forget = () => {
    const dispatch = useDispatch()
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down("sm"))
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [otp, setOtp] = useState("")

    const handleChange = (newValue) => {
        setOtp(newValue)
    }
    const navigate = useNavigate()

    const defaultValues = {
        password: "",
        oldPassWord: "",
    }
    const userSchema = object({
        oldPassWord: string()
            .required("Không được để trống")
            .min(6, "Phải có ít nhất 6 kí tự!")
            .max(24, "Chỉ được phép tối đa 24 kí tự!"),
        newPassWord: string()
            .required("Không được để trống")
            .min(6, "Phải có ít nhất 6 kí tự!")
            .max(24, "Chỉ được phép tối đa 24 kí tự!"),
    })

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues,
        resolver: yupResolver(userSchema),
    })

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            aForgetAPI(data)
            setLoading(false)
            dispatch(
                showToast({
                    type: "success",
                    message: "Tạo mậtt khẩu mới thành công!",
                }),
            )
            navigate("/sign-in")
        } catch (err) {
            setLoading(false)
            console.log(err)
            setError(err)
        }
    }

    const [activeStep, setActiveStep] = useState(0)

    const steps = ["Xác thực email", "Xác thực OTP", "Tạo mật khẩu mới"]

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <Box>
                            <Typography>Xin chào!</Typography>
                            <Typography gutterBottom>
                                Hình như bạn đã quên mật khẩu!
                            </Typography>
                            <Typography gutterBottom>
                                Vui lòng nhập email để tạo mật khẩu mới
                            </Typography>
                            <TextField
                                variant="outlined"
                                placeholder="Email..."
                                required
                            />
                            <Button
                                variant="contained"
                                sx={{ minHeight: "56px" }}
                            >
                                <SendIcon />
                            </Button>
                        </Box>
                    </Box>
                )
            case 1:
                return (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <SecurityIcon
                            sx={{
                                width: "100px",
                                height: "100px",
                                marginBottom: "28px",
                            }}
                        />
                        <MuiOtpInput
                            value={otp}
                            onChange={handleChange}
                            length={6}
                        />
                        <Button variant="contained" sx={{ marginTop: "28px" }}>
                            Xác Thực OTP
                        </Button>
                    </Box>
                )
            case 2:
                return (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        type="password"
                                        required
                                        variant="outlined"
                                        placeholder="Mật khẩu..."
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="password"
                                        required
                                        variant="outlined"
                                        placeholder="xác nhận mật khẩu..."
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained">
                                        Tạo mật khẩu mới
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                )
            default:
                return "Unknown step"
        }
    }

    return (
        <Fragment>
            <Seo
                title="Coffee Sweet | Quên mật khẩu "
                description="Nơi chia sẻ những khoảnh khắc https://facebook.com/trung02032001"
                type="webapp"
                name="Coffee Sweet"
            />
            <Box className="h-screen flex flex-col items-center justify-center sm:px-2">
                <Paper
                    sx={{
                        width: {
                            xs: "100%",
                            md: "70%",
                        },

                        marginBottom: "32px",
                    }}
                    elevation={4}
                >
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Paper>
                <Paper
                    sx={{
                        width: {
                            xs: "100%",
                            md: "70%",
                        },
                        height: {
                            xs: "100vh",
                            sm: "50vh",
                        },
                    }}
                    elevation={4}
                >
                    <Box className="h-full relative overflow-hidden" p={3}>
                        <Link to="/">
                            <img
                                src={logo}
                                alt="Coffee sweet"
                                className="lg:w-[120px] w-[80px]  absolute top-0 right-0"
                            />
                        </Link>

                        <Box>
                            {activeStep === steps.length ? (
                                <Box>
                                    <Typography>
                                        Bạn đã tạo mật khẩu mới thành công!
                                    </Typography>
                                </Box>
                            ) : (
                                <Box>
                                    <Typography>
                                        {getStepContent(activeStep)}
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="flex-end"
                                    >
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                        >
                                            Quay lại
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                        >
                                            {activeStep === steps.length - 1
                                                ? "Hoàn thành"
                                                : "Tiếp tục"}
                                        </Button>
                                    </Stack>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Fragment>
    )
}

export default Forget
