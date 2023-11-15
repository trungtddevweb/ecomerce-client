import { useState, Fragment, useEffect } from "react"
import { Box, Typography, Button, Stack } from "@mui/material"
import SecurityIcon from "@mui/icons-material/Security"
import { MuiOtpInput } from "mui-one-time-password-input"
import { useNavigate, useLocation } from "react-router-dom"
import { userAuthAPI, verifyEmailOTPAPI } from "@/api/main"
import { useDispatch } from "react-redux"
import { showToast } from "@/redux/toastSlice"
import Seo from "@/components/feature/Seo"

const VerifyOTP = () => {
    const [otp, setOtp] = useState("")
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const email = location.state?.email || null
    const [minutes, setMinutes] = useState(1)
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval)
                } else {
                    setSeconds(59)
                    setMinutes(minutes - 1)
                }
            }
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [seconds])
    const handleChange = (newValue) => {
        setOtp(newValue)
    }

    const resendOTP = () => {
        setMinutes(1)
        setSeconds(0)
        userAuthAPI({ email })
    }

    const verifyOTP = async () => {
        const res = await verifyEmailOTPAPI({ email, token: otp })
        console.log(res)
        if (res.success) {
            dispatch(showToast({ type: "success", message: res.message }))
            navigate("/sign-in")
        }
    }

    return (
        <Fragment>
            <Seo
                title="May Store | Xác thực "
                description="Buy everything you need"
                type="webapp"
                name="May Store"
            />
            <Box className="h-screen flex items-center justify-center sm:px-2">
                <Box className="w-[500px] flex flex-col items-center justify-center overflow-hidden">
                    <SecurityIcon
                        sx={{ width: "100px", height: "100px", mb: 2 }}
                    />
                    <MuiOtpInput
                        value={otp}
                        display="flex"
                        gap={2}
                        length={6}
                        autoFocus
                        onChange={handleChange}
                    />
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        mt={2}
                    >
                        {seconds > 0 || minutes > 0 ? (
                            <Typography sx={{ color: "" }}>
                                Mã có hiêu lực trong:
                                {minutes < 10 ? `0${minutes}` : minutes}:
                                {seconds < 10 ? `0${seconds}` : seconds}
                            </Typography>
                        ) : (
                            <Typography
                                onClick={resendOTP}
                                sx={{ cursor: "pointer" }}
                            >
                                Gửi lại mã
                            </Typography>
                        )}
                        <Button variant="contained" onClick={verifyOTP}>
                            Xác thực OTP
                        </Button>
                        {email}
                    </Stack>
                </Box>
            </Box>
        </Fragment>
    )
}

export default VerifyOTP
