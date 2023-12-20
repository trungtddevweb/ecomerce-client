import { Box } from "@mui/material"

import PaginationCustom from "@/components/common/Pagination"
import { listFieldProductController } from "@/utils/const"

const ProductController = () => {
    return (
        <Box>
            <PaginationCustom
                urlFetch="/dashboard/products"
                valueToFetch={listFieldProductController}
            />
        </Box>
    )
}

export default ProductController
