import { Grid, Box } from "@mui/material"
import useStyles from "@/assets/styles"
import useFetch from "@/hooks/useFetch"
import CardProduct from "../common/CardProduct"

const SaleProducts = () => {
    const classes = useStyles()
    const { data, error, loading } = useFetch("/products/flash-sale/products")

    if (loading) return <div>Loading...</div>

    return (
        <Box className={classes.marginAuto}>
            <Grid container spacing={1} my={2}>
                {data &&
                    data.docs?.map((product) => (
                        <Grid item xs={2.4} key={product._id}>
                            <CardProduct product={product} />
                        </Grid>
                    ))}
            </Grid>
        </Box>
    )
}

export default SaleProducts
