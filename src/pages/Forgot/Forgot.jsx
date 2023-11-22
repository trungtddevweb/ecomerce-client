import {
    Box,
    FormControl,
    TextField,
    Typography,
    Paper,
    Grid,
} from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton"
import { Fragment, useState } from "react"
import Seo from "@/components/feature/Seo"
import { showToast } from "@/redux/toastSlice"
import { Controller, useForm } from "react-hook-form"
import { object, string } from "yup"
import { useDispatch } from "react-redux"
import { ErrorMessage } from "@hookform/error-message"
import TypeErrorMsg from "@/components/common/TypeErrorMsg"
import { yupResolver } from "@hookform/resolvers/yup"
import { forgotAuthAPI } from "@/api/main"
import { useNavigate } from "react-router-dom"

const Forgot = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const defaultValues = {
        email: "",
    }
    const userSchema = object({
        email: string()
            .email("Phải có dạng example@abc.xyz")
            .test(
                "contains-dot",
                "Email chưa hợp lệ",
                (value) => value && value.includes("."),
            ),
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
            const res = await forgotAuthAPI(data)
            if (res.success) {
                dispatch(showToast({ type: "success", message: res.message }))
                navigate("/verify-pass", { state: data })
            }
        } catch (err) {
            setLoading(false)
            dispatch(
                showToast({
                    type: "error",
                    message: err.response?.data.message,
                }),
            )
        }
    }

    return (
        <Fragment>
            <Seo
                title="Quên mật khẩu "
                description="Buy everything you need"
                type="webapp"
                name="May Store"
            />

            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                className="h-screen flex items-center justify-center sm:px-2"
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
                    <Typography mb={3}>
                        Vui lòng nhập email mà đã liên kết với tài khoản của bạn
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
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
                                        <TypeErrorMsg message={message} />
                                    )}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <LoadingButton
                                fullWidth
                                loading={loading}
                                disabled={!isValid}
                                type="submit"
                                variant="contained"
                            >
                                Tiếp theo
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Fragment>
    )
}

export default Forgot
