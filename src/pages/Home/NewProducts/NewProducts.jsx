import { Box, Grid } from "@mui/material"

import TitleHeading from "@/components/feature/TitleHeading"
import CardProduct from "@/components/common/CardProduct"
import useFetch from "@/hooks/useFetch"

const NewProducts = () => {
    const { data, loading, error } = useFetch("/products")
    if (loading) return <div>Fallback</div>

    if (error) return <div>error</div>

    return (
        <Box className="main-w flex flex-col items-center">
            <TitleHeading title="Sản phẩm mới" />
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
