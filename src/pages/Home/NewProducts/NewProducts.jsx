import { Box } from "@mui/material"

import TitleHeading from "@/components/feature/TitleHeading"
import CardProduct from "@/components/common/CardProduct"
import useFetch from "@/hooks/useFetch"

const NewProducts = () => {
    const { data, loading, error } = useFetch("/products")
    if (loading) return <div>Fallback</div>

    if (error) return <div>error</div>
    return (
        <Box>
            <TitleHeading title="Sản phẩm mới" />
            {data &&
                data.docs.map((item) => (
                    <CardProduct
                        product={item}
                        key={item._id}
                        loading={loading}
                    />
                ))}
        </Box>
    )
}

export default NewProducts
