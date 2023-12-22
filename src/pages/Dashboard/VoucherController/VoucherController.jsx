import { Box } from "@mui/material"

import PaginationCustom from "@/components/common/Pagination"
import { listFieldVoucherController } from "@/utils/const"

const VoucherController = () => {
    return (
        <Box>
            <PaginationCustom
                urlFetch="/dashboard/vouchers"
                valueToFetch={listFieldVoucherController}
            />
        </Box>
    )
}

export default VoucherController
