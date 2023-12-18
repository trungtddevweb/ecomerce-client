import PropTypes from "prop-types"
import { useState } from "react"
import { styled } from "@mui/material/styles"
import {
    TableBody,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Pagination,
    Stack,
    Typography,
    Select,
    MenuItem,
    LinearProgress,
} from "@mui/material"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"

import useFetch from "@/hooks/useFetch"
import { formatCellValue } from "@/utils/format"
import { optionSelectPageValues } from "@/utils/const"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor:
            theme.palette.mode === "dark"
                ? theme.palette.common.black
                : theme.palette.primary.main,

        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}))

const PaginationCustom = ({ valueToFetch, urlFetch }) => {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(5)
    const { data, error, loading } = useFetch(
        `${urlFetch}?page=${page}&limit=${limit}`,
    )

    const handleChange = (event, value) => {
        setPage(value)
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {valueToFetch &&
                            valueToFetch.map((item, index) => (
                                <StyledTableCell key={index} align="center">
                                    {item.label}
                                </StyledTableCell>
                            ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loading ? (
                        <StyledTableRow>
                            <StyledTableCell colSpan={5}>
                                <LinearProgress />
                            </StyledTableCell>
                        </StyledTableRow>
                    ) : error ? (
                        <div>Error</div>
                    ) : (
                        data?.docs.map((row, index) => (
                            <StyledTableRow key={index}>
                                {valueToFetch?.map((item) => (
                                    <StyledTableCell
                                        key={item.value}
                                        align="center"
                                    >
                                        {formatCellValue(item.value, row)}
                                    </StyledTableCell>
                                ))}
                            </StyledTableRow>
                        ))
                    )}
                    <StyledTableRow className="justify-end">
                        <StyledTableCell colSpan={5}>
                            <Stack alignItems="center" direction="row">
                                <Stack
                                    direction="row"
                                    spacing={0.5}
                                    alignItems="center"
                                >
                                    <Typography variant="caption">
                                        Chế độ xem
                                    </Typography>
                                    <Select
                                        size="small"
                                        variant="standard"
                                        value={limit}
                                        onChange={(e) =>
                                            setLimit(e.target.value)
                                        }
                                    >
                                        {optionSelectPageValues.map((item) => (
                                            <MenuItem value={item} key={item}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Stack>
                                <Pagination
                                    className="self-end"
                                    count={data?.totalPages}
                                    color="primary"
                                    shape="rounded"
                                    variant="outline"
                                    onChange={handleChange}
                                />
                            </Stack>
                        </StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

PaginationCustom.propTypes = {
    valueToFetch: PropTypes.array.isRequired,
    urlFetch: PropTypes.string.isRequired,
}

export default PaginationCustom
