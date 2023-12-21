import { Box } from "@mui/material"

import PaginationCustom from "@/components/common/Pagination"
import { listFieldOrderController } from "@/utils/const"

const OrderController = () => {
    return (
        <Box>
            <PaginationCustom
                urlFetch="/dashboard/orders"
                valueToFetch={listFieldOrderController}
            />
        </Box>
    )
}

export default OrderController
