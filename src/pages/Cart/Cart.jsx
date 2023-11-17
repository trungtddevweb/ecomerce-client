import Seo from "@/components/feature/Seo"
import { Box, Typography } from "@mui/material"
import { useLoaderData } from "react-router-dom"

const Cart = () => {
    const cart = useLoaderData()
    const cartLength = cart.length
    return (
        <>
            <Seo title={`Giỏ hàng (${cartLength})`} />
            <Box className="flex justify-center">
                <Box width={1400}>
                    <Typography
                        variant="h6"
                        color="primary"
                    >{`Giỏ hàng của tôi (${cartLength})`}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default Cart
