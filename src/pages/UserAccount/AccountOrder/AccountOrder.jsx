import PaginationCustom from "@/components/common/Pagination"
import { listValueOfOrderToGet } from "@/utils/const"

const AccountOrder = () => {
    return (
        <PaginationCustom
            urlFetch="/order"
            valueToFetch={listValueOfOrderToGet}
        />
    )
}

export default AccountOrder
