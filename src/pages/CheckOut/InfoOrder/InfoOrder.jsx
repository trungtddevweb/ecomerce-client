import { useState } from "react"
import {
    Box,
    TextField,
    FormControl,
    Button,
    Grid,
    Autocomplete,
} from "@mui/material"
import { Controller } from "react-hook-form"
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { useSelector } from "react-redux"
import * as yup from "yup"
import { useLoaderData, useNavigate, useLocation } from "react-router-dom"

import { yupResolver } from "@hookform/resolvers/yup"
import TypeErrorMsg from "@/components/common/TypeErrorMsg"
import { getDistrictsAPI } from "@/api/main"
import { pathRoutes } from "@/utils/const"

const schema = yup.object({
    fullName: yup
        .string()
        .min(1, "Phải có ít nhất 1 kí tự!")
        .required("Không được để trống!"),
    phoneNumber: yup
        .string()
        .required("Không được để trống!")
        .min(8, "Phải có ít nhất 8 kí tự!")
        .required("Không được để trống!")
        .max(15, "Không thể vượt quá 15 kí tự!"),
    address: yup.string().required("Không được để trống!"),
})

const InfoOrder = () => {
    const location = useLocation()
    const totalPrice = location.state.totalPrice
    const [selectedProvinces, setSelectedProvinces] = useState("")
    const [selectedDistrict, setSelectedDistrict] = useState("")
    const [districts, setDistricts] = useState([])

    const user = useSelector((state) => state.auth.user)
    const { data: cities } = useLoaderData()
    const navigate = useNavigate()
    const defaultValues = {
        fullName: user.name,
        phoneNumber: user?.info.phoneNumber || "",
        address: user?.info.address || "",
    }
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
        defaultValues,
    })

    // Handlers
    const handleValuesForm = async (data) => {
        const payload = {
            ...data,
            district: selectedDistrict,
            province: selectedProvinces,
        }
        navigate(`/${pathRoutes.checkOut}/${pathRoutes.paymentMethods}`, {
            state: { payload, totalPrice },
        })
    }

    const handleProvinceChange = (event, newValue) => {
        setSelectedProvinces(newValue?.name)
        setSelectedDistrict(null)
        if (newValue) {
            const fetchDistricts = async () => {
                try {
                    const response = await getDistrictsAPI(newValue.code)
                    setDistricts(response.data.districts)
                } catch (error) {
                    console.error(error)
                }
            }
            fetchDistricts()
        } else {
            setDistricts([])
        }
    }

    const handleDistrictChange = (event, newValue) => {
        setSelectedDistrict(newValue?.name)
    }

    return (
        <Box component="form" onSubmit={handleSubmit(handleValuesForm)}>
            <Grid container spacing={1.8} mb={4}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <Controller
                            control={control}
                            name="fullName"
                            render={({ field }) => (
                                <TextField
                                    error={!!errors.fullName}
                                    label="Họ tên"
                                    type="text"
                                    {...field}
                                    autoComplete="name"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="fullName"
                            render={({ message }) => (
                                <TypeErrorMsg message={message} />
                            )}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <Controller
                            control={control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <TextField
                                    error={!!errors.phoneNumber}
                                    label="Số điện thoại"
                                    type="text"
                                    {...field}
                                    autoComplete="tel"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="phoneNumber"
                            render={({ message }) => (
                                <TypeErrorMsg message={message} />
                            )}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <Controller
                            control={control}
                            name="address"
                            render={({ field }) => (
                                <TextField
                                    error={!!errors.address}
                                    label="Địa chỉ"
                                    type="text"
                                    {...field}
                                    autoComplete="address"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="address"
                            render={({ message }) => (
                                <TypeErrorMsg message={message} />
                            )}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} container spacing={1.4}>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <Autocomplete
                                id="city-select"
                                name="province"
                                options={cities}
                                onChange={handleProvinceChange}
                                autoHighlight
                                getOptionLabel={(option) => option.name}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Thành phố"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: "new-password", // disable autocomplete and autofill
                                        }}
                                    />
                                )}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <Autocomplete
                                id="district-select"
                                name="district"
                                options={districts}
                                autoHighlight
                                getOptionLabel={(option) => option.name}
                                onChange={handleDistrictChange}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Quận/Huyện"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: "new-password", // disable autocomplete and autofill
                                        }}
                                    />
                                )}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Button
                variant="contained"
                color="primary"
                disabled={!isValid}
                onClick={handleSubmit(handleValuesForm)}
            >
                Chuyển tới phương thức thanh toán
            </Button>
        </Box>
    )
}

InfoOrder.propTypes = {}

export default InfoOrder
