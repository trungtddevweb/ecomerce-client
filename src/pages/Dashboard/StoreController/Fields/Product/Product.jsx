import { useState } from "react"
import { useForm } from "react-hook-form"
import { createProductAPI } from "@/api/main"
import { useDispatch } from "react-redux"
import { Typography, Grid, TextField, Box, InputAdornment } from "@mui/material"
import { LoadingButton } from "@mui/lab"

import TypeErrorMsg from "@/components/common/TypeErrorMsg"
import { ErrorMessage } from "@hookform/error-message"
import { showToast } from "@/redux/toastSlice"

const Product = () => {
    const [files, setFiles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const handleFileUpload = (event) => {
        const fileList = event.target.files
        const fileArray = Array.from(fileList)
        setFiles(fileArray)
    }

    const createFormData = (data, files) => {
        const formData = new FormData()
        formData.set("name", data.name)
        formData.set("desc", data.desc)
        formData.set("brand", data.brand)
        formData.set("quantity", data.quantity)
        formData.set("price", data.price)
        formData.set("tag", data.tag)

        // Handlers
        const colorsChange = data.colors.split(",")
        colorsChange.forEach((colors) => {
            formData.append("colors", colors)
        })

        const sizesChange = data.sizes
        sizesChange?.forEach((size) => {
            formData.append("sizes", size)
        })

        for (let i = 0; i < files.length && i < 5; i++) {
            formData.append("productImages", files[i])
        }

        return formData
    }

    const onSubmit = async (data) => {
        const formData = createFormData(data, files)
        setIsLoading(true)
        try {
            const res = await createProductAPI(formData)
            if (res.status === 201) {
                setIsLoading(false)
                dispatch(
                    showToast({
                        type: "success",
                        message: "Tạo mới sản phẩm thành công!",
                    }),
                )
                reset()
            }
        } catch (err) {
            console.error(err)
            setIsLoading(false)
            dispatch(
                showToast({
                    type: "error",
                    message: "Tạo mới sản phẩm thất bại!",
                }),
            )
        }
    }

    return (
        <Box>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6} item>
                        <TextField
                            label="Tên sản phẩm"
                            variant="outlined"
                            fullWidth
                            autoFocus
                            {...register("name", { required: true })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="name"
                            render={({ message }) => (
                                <TypeErrorMsg message={message} />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            type="text"
                            label="Thương hiệu"
                            variant="outlined"
                            fullWidth
                            {...register("brand", { required: true })}
                        />
                        <ErrorMessage errors={errors} fieldName="brand" />
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Chi tiết sản phẩm"
                                multiline
                                variant="outlined"
                                fullWidth
                                rows={4}
                                {...register("desc", { required: true })}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="desc"
                                render={({ message }) => (
                                    <TypeErrorMsg message={message} />
                                )}
                            />
                        </Grid>
                        <Grid container item xs={12} spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    type="number"
                                    fullWidth
                                    label="Giá"
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                đ
                                            </InputAdornment>
                                        ),
                                    }}
                                    required
                                    defaultValue={1}
                                    {...register("price", {
                                        validate: {
                                            lessThanZero: (value) => {
                                                return (
                                                    value >= 0 ||
                                                    "Giá phải là 1 giá trị lớn hơn hoặc bằng 0"
                                                )
                                            },
                                        },
                                    })}
                                />
                                {errors.price &&
                                    errors.price.type === "lessThanZero" && (
                                        <Typography className="text-danger">
                                            {errors.price.message}
                                        </Typography>
                                    )}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Màu sắc"
                                    variant="outlined"
                                    {...register("colors")}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type="number"
                                    label="Số lượng"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    defaultValue={1}
                                    {...register("quantity", {
                                        validate: {
                                            positive: (value) => {
                                                return (
                                                    value >= 1 ||
                                                    "Số lượng phải là số lớn hoặc bằng 1"
                                                )
                                            },
                                        },
                                    })}
                                />
                                {errors.quantity &&
                                    errors.quantity.type === "positive" && (
                                        <Typography className="text-danger">
                                            {errors.quantity.message}
                                        </Typography>
                                    )}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Kích thước"
                            variant="outlined"
                            fullWidth
                            {...register("size", { required: true })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="size"
                            render={({ message }) => (
                                <TypeErrorMsg message={message} />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Phân loại"
                            variant="outlined"
                            fullWidth
                            {...register("tag", { required: true })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="tag"
                            render={({ message }) => (
                                <TypeErrorMsg message={message} />
                            )}
                        />
                    </Grid>

                    <Grid xs={12} item>
                        <Typography
                            component="input"
                            type="file"
                            multiple
                            accept="image/png, image/jpeg"
                            {...register("productImages", {
                                required: true,
                                onChange: (e) => handleFileUpload(e),
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="productImages"
                            render={({ message }) => (
                                <TypeErrorMsg message={message} />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <LoadingButton
                            loading={isLoading}
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Tạo mới
                        </LoadingButton>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Product
