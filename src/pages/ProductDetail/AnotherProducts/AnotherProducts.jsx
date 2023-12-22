import { Box, Grid, Typography } from "@mui/material"
import { useEffect, useState, useMemo } from "react"
import { getProductByFieldAPI } from "@/api/main"
import CardProduct from "@/components/common/CardProduct"
import SkeletonFallback from "@/components/fallback/Skeleton/SkeletonFallback"

const AnotherProduct = ({ fields, value, productId }) => {
    const [lists, setLists] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProductByFieldAPI(fields, value, 6, 1)
                setIsLoading(false)
                setLists(products.docs)
            } catch (error) {
                setIsLoading(false)
                console.error(error)
            }
        }
        fetchProducts()
    }, [fields, value])

    const processedResult = useMemo(
        () => lists.filter((item) => !(item._id && item._id === productId)),
        [lists, productId],
    )
    return (
        <Box display="flex" flexDirection="column">
            <Box>
                {processedResult.length === 0 && (
                    <Typography
                        variant="subtitle1"
                        color="GrayText"
                        padding={2}
                    >
                        Không có sản phẩm nào!
                    </Typography>
                )}
                <Grid container minHeight={360} spacing={2}>
                    {(isLoading
                        ? Array.from(new Array(6))
                        : processedResult
                    ).map((list, index) => (
                        <Grid item key={list?._id || index} xs={2}>
                            {list ? (
                                <CardProduct product={list} />
                            ) : (
                                <Box>
                                    <SkeletonFallback />
                                </Box>
                            )}
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default AnotherProduct
