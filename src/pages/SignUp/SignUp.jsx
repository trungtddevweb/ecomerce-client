import {
    Box,
    Divider,
    FormControl,
    Paper,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material"
import { LoadingButton } from "@mui/lab"
import { Controller, useForm } from "react-hook-form"
import { object, string } from "yup"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import Image from "mui-image"
import { GoogleLogin } from "@react-oauth/google"
import { yupResolver } from "@hookform/resolvers/yup"
import { Fragment, useState } from "react"

import logo from "@/assets/images/logo.png"
import registerBg from "@/assets/images/bg-register.jpg"
import { loginSuccess } from "@/redux/userSlice"
import TypeErrorMsg from "@/components/common/TypeErrorMsg"
import { ErrorMessage } from "@hookform/error-message"
import { signInWithGoogleAPI, signUpAPI, userAuthAPI } from "@/api/main"
import { showToast } from "@/redux/toastSlice"
import Seo from "@/components/feature/Seo"

const SignUp = () => {
    const dispatch = useDispatch()
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down("sm"))
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const defaultValues = {
        name: "",
        email: "",
        password: "",
    }
    const userSchema = object({
        name: string()
            .min(1, "Phải có ít nhất 1 kí tự!")
            .required("Không được để trống!")
            .max(24, "Chỉ được phép tối đa 24 kí tự!"),
        email: string()
            .email("Phải có dạng example@abc.xyz")
            .test(
                "contains-dot",
                "Email chưa hợp lệ",
                (value) => value && value.includes("."),
            )
            .required("Không được để trống"),
        password: string()
            .required("Không được để trống")
            .min(6, "Phải có ít nhất 6 kí tự!")
            .max(24, "Chỉ được phép tối đa 24 kí tự!"),
    })

    const {
        handleSubmit,
        control,
        formState: { errors, isValid },
    } = useForm({
        defaultValues,
        mode: "onChange",
        resolver: yupResolver(userSchema),
    })

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const res = await signUpAPI(data)
            console.log(res)
            if (res.status === 201) {
                await userAuthAPI(data)
                dispatch(
                    showToast({
                        type: "success",
                        message: `Mã OTP đã được gửi về ${res.data.email}`,
                    }),
                )

                navigate("/verify-otp", {
                    state: { email: res.data.email },
                })
            }
        } catch (err) {
            setError(err.response?.data.message)
        } finally {
            setLoading(false)
        }
    }

    const onLoginGgSuccess = async (credentialResponse) => {
        try {
            setLoading(true)
            const decode = await signInWithGoogleAPI(
                credentialResponse.credential,
            )
            dispatch(loginSuccess(decode))
            navigate(-1)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Fragment>
            <Seo
                title="May Store | Đăng ký "
                description="Buy everything you need"
                type="webapp"
                name="May Store"
            />
            <Box className="h-screen flex items-center justify-center sm:px-2">
                <Paper
                    sx={{
                        width: {
                            xs: "100%",
                            md: "80%",
                        },
                        height: {
                            xs: "100vh",
                            sm: "80vh",
                        },
                    }}
                    elevation={4}
                >
                    <Box className="h-full relative overflow-hidden">
                        <Link to="/">
                            <Box
                                component="img"
                                sx={{
                                    p: 2,
                                    right: 0,
                                }}
                                position="absolute"
                                src={logo}
                                width={70}
                                alt="May Store"
                            />
                        </Link>

                        <Box
                            sx={{
                                display: isMatch ? "block" : "flex",
                            }}
                        >
                            {!isMatch && (
                                <Box flex={2}>
                                    <Image
                                        src={registerBg}
                                        alt="Background"
                                        width="100%"
                                        height="80vh"
                                    />
                                </Box>
                            )}
                            <Box
                                component="form"
                                sx={{
                                    marginTop: isMatch ? "22%" : "8%",
                                    flex: 1,
                                    padding: isMatch ? "10px" : "32px",
                                }}
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <Typography
                                    align="center"
                                    variant="h6"
                                    gutterBottom
                                    paddingY={2}
                                    color="primary"
                                >
                                    Đăng kí tài khoản
                                </Typography>
                                <Stack spacing={2} marginBottom={1}>
                                    <TypeErrorMsg message={error} />
                                    <FormControl sx={{ flex: 1 }}>
                                        <Controller
                                            control={control}
                                            name="name"
                                            render={({ field }) => (
                                                <TextField
                                                    error={!!errors.name}
                                                    label="Tên"
                                                    type="text"
                                                    {...field}
                                                />
                                            )}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="name"
                                            render={({ message }) => (
                                                <TypeErrorMsg
                                                    message={message}
                                                />
                                            )}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name="email"
                                            render={({ field }) => (
                                                <TextField
                                                    error={!!errors.email}
                                                    label="Email"
                                                    type="email"
                                                    {...field}
                                                />
                                            )}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="email"
                                            render={({ message }) => (
                                                <TypeErrorMsg
                                                    message={message}
                                                />
                                            )}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name="password"
                                            render={({ field }) => (
                                                <TextField
                                                    error={!!errors.password}
                                                    label="Mật khẩu"
                                                    type="password"
                                                    {...field}
                                                />
                                            )}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="password"
                                            render={({ message }) => (
                                                <TypeErrorMsg
                                                    message={message}
                                                />
                                            )}
                                        />
                                    </FormControl>
                                    <LoadingButton
                                        loading={loading}
                                        fullWidth
                                        variant="contained"
                                        type="submit"
                                        disabled={!isValid}
                                    >
                                        Tạo tài khoản
                                    </LoadingButton>
                                    <Divider variant="fullWidth">hoặc</Divider>
                                </Stack>
                                <Stack alignItems="center" marginTop={2}>
                                    <GoogleLogin
                                        useOneTap
                                        onSuccess={onLoginGgSuccess}
                                        onError={() => {
                                            console.log("Login Failed")
                                        }}
                                    />
                                </Stack>
                                <Typography
                                    align="center"
                                    variant="subtitle2"
                                    component="div"
                                    marginTop={3}
                                >
                                    Đã có tài khoản!
                                    <Link to="/sign-in">
                                        <Typography
                                            variant="subtitle2"
                                            component="span"
                                            marginLeft={1}
                                            color="primary"
                                            className="hover:underline hover:text-cyan-900"
                                        >
                                            Đăng nhập ngay
                                        </Typography>
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Fragment>
    )
}

export default SignUp
