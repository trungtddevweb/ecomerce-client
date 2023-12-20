import Pagination from "@/components/common/Pagination"
import { listFieldUserController } from "@/utils/const"
import { Box } from "@mui/material"

const UserController = () => {
    return (
        <Box>
            <Pagination
                urlFetch="/dashboard/users"
                valueToFetch={listFieldUserController}
            />
        </Box>
    )
}

export default UserController
