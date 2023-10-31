import { ThumbUp } from "@mui/icons-material"
import {
    Box,
    Divider,
    ListItem,
    MenuList,
    Paper,
    Stack,
    Typography,
} from "@mui/material"
import Image from "mui-image"

const PopularProduct = () => {
    const products = [
        {
            name: "Áo thun thu đông",
            imgUrl: "https://bizweb.dktcdn.net/100/415/697/products/1-a76844f8-43b5-4ba4-8f94-08ff2f36394a.jpg?v=1657108723990",
            tag: "Áo",
            sales: 1141,
            sum: 121414,
        },
        {
            name: "Áo thun thu đông",
            imgUrl: "https://bizweb.dktcdn.net/100/415/697/products/1-a76844f8-43b5-4ba4-8f94-08ff2f36394a.jpg?v=1657108723990",
            tag: "Áo",
            sales: 1141,
            sum: 121414,
        },
        {
            name: "Áo thun thu đông",
            imgUrl: "https://bizweb.dktcdn.net/100/415/697/products/1-a76844f8-43b5-4ba4-8f94-08ff2f36394a.jpg?v=1657108723990",
            tag: "Áo",
            sales: 1141,
            sum: 121414,
        },
    ]

    return (
        <Box>
            <Paper
                sx={{
                    height: "25vh",
                    borderRadius: 6,
                    p: 2,
                }}
                elevation={4}
            >
                <Stack>
                    <Stack direction="row" spacing={1} mb={1}>
                        <ThumbUp color="error" fontSize="small" />
                        <Typography>Sản phẩm phổ biến</Typography>
                    </Stack>
                    <Divider variant="fullWidth" />
                </Stack>
                <MenuList>
                    <MenuList sx={{ display: "contents" }}>
                        <Box className="flex">
                            <Typography
                                sx={{
                                    flex: 3,
                                }}
                                variant="subtitle2"
                                fontWeight={600}
                            >
                                Sản phẩm
                            </Typography>
                            <Typography
                                sx={{
                                    flex: 1,
                                }}
                                variant="subtitle2"
                                fontWeight={600}
                                textAlign="right"
                            >
                                Thẻ
                            </Typography>
                            <Typography
                                sx={{
                                    flex: 1,
                                }}
                                variant="subtitle2"
                                fontWeight={600}
                                textAlign="right"
                            >
                                Đã bán
                            </Typography>
                            <Typography
                                sx={{
                                    flex: 1,
                                }}
                                variant="subtitle2"
                                fontWeight={600}
                                textAlign="right"
                            >
                                Tổng giá trị
                            </Typography>
                        </Box>
                    </MenuList>
                    {products.map((product, index) => (
                        <ListItem
                            disableGutters
                            key={index}
                            sx={{ display: "flex" }}
                        >
                            <Box display="flex" alignItems="center" flex={3}>
                                <Image
                                    width={40}
                                    height={40}
                                    alt={product.name}
                                    src={product.imgUrl}
                                />
                                <Typography variant="subtitle2" ml={1}>
                                    {product.name}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    flex: 1,
                                }}
                                variant="subtitle2"
                                textAlign="right"
                            >
                                {product.tag}
                            </Typography>
                            <Typography
                                sx={{
                                    flex: 1,
                                }}
                                variant="subtitle2"
                                textAlign="right"
                            >
                                {product.sales}
                            </Typography>
                            <Typography
                                sx={{
                                    flex: 1,
                                }}
                                variant="subtitle2"
                                textAlign="right"
                            >
                                {product.sum}
                            </Typography>
                        </ListItem>
                    ))}
                </MenuList>
            </Paper>
        </Box>
    )
}

PopularProduct.propTypes = {}

export default PopularProduct
