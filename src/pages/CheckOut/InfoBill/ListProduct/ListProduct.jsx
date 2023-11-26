import PropTypes from "prop-types"
import { Stack, Typography, Box } from "@mui/material"

import useFetch from "@/hooks/useFetch"
import { formatPrice } from "@/utils/format"
const ListProduct = ({ productId, cartItem }) => {
    const {
        data: product,
        loading,
        error,
    } = useFetch(`/products/find/${productId}`)

    if (loading) return <div>Loading...</div>

    if (error) return <div>Error...</div>

    return (
        <Stack direction="row" spacing={2} mb={2}>
            <Stack direction="row" spacing={1}>
                <img
                    loading="lazy"
                    width={75}
                    height={75}
                    alt={product?.name}
                    src={product?.productImages[0]}
                />
                <Box>
                    <Typography fontSize={16} width="80%">
                        {product?.name}
                    </Typography>
                    <Typography variant="caption" color="GrayText">
                        Số lượng: {cartItem.quantity}{" "}
                    </Typography>
                    <Typography variant="caption" color="GrayText">
                        - Màu sắc: {cartItem.color}{" "}
                    </Typography>
                    <Typography variant="caption" color="GrayText">
                        - Kích thước: {cartItem.size}
                    </Typography>
                </Box>
            </Stack>
            <Typography color="red">
                {formatPrice(cartItem.sumPrice)}₫
            </Typography>
        </Stack>
    )
}

ListProduct.propTypes = {
    productId: PropTypes.string.isRequired,
    cartItem: PropTypes.object.isRequired,
}

export default ListProduct
