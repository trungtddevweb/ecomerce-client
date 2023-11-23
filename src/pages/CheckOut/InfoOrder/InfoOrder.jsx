import PropTypes from "prop-types"
import { Box, FormControl } from "@mui/material"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup.object({
    fullName: yup.string().required(),
    phoneNumber: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    province: yup.string().required(),
})

const InfoOrder = (props) => {
    const user = useSelector((state) => state.auth.user)

    const defaultValues = {
        fullName: user.name || "",
        phoneNumber: user.info.phoneNumber || "",
        address: user.info.address || "",
        city: "",
        province: "",
    }
    const {
        control,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
        defaultValues,
    })
    return (
        <Box>
            <form></form>
        </Box>
    )
}

InfoOrder.propTypes = {}

export default InfoOrder
