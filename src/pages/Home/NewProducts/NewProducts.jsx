import { Box, Grid } from "@mui/material"
import TitleHeading from "@/components/feature/TitleHeading"
import CardProduct from "@/components/common/CardProduct"
import useFetch from "@/hooks/useFetch"
import useStyles from "@/assets/styles"
import SkeletonFallback from "@/components/fallback/Skeleton/SkeletonFallback"

const NewProducts = () => {
    const classes = useStyles()
    const { data, loading, error } = useFetch("/products")
    if (loading)
        return (
            <Box className={classes.marginAuto} py={3}>
                <Grid container spacing={1}>
                    <Grid item xs={2.4}>
                        <SkeletonFallback />
                    </Grid>
                    <Grid item xs={2.4}>
                        <SkeletonFallback />
                    </Grid>
                    <Grid item xs={2.4}>
                        <SkeletonFallback />
                    </Grid>
                    <Grid item xs={2.4}>
                        <SkeletonFallback />
                    </Grid>
                    <Grid item xs={2.4}>
                        <SkeletonFallback />
                    </Grid>
                </Grid>
            </Box>
        )

    if (error) return <div>error</div>

    return (
        <Box className={classes.marginAuto} py={5}>
            <Box className="text-center mb-2">
                <TitleHeading title="Sản phẩm mới" />
            </Box>
            <Grid container spacing={1}>
                {data &&
                    data.docs.map((item) => (
                        <Grid md={2.4} item key={item._id}>
                            <CardProduct product={item} loading={loading} />
                        </Grid>
                    ))}
            </Grid>
        </Box>
    )
}

export default NewProducts
