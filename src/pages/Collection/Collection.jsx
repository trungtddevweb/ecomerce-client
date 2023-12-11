import {
    Box,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemButton,
    Checkbox,
    ListItemText,
    Divider,
    Stack,
    Pagination,
} from "@mui/material"
import { HashLoader } from "react-spinners"

import Seo from "@/components/feature/Seo"
import useFetch from "@/hooks/useFetch"
import { useState } from "react"
import CardProduct from "@/components/common/CardProduct"
import { listOptionsFilter, listPriceFilter } from "@/utils/const"
import useStyles from "@/assets/styles"

const Collection = () => {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [checked, setChecked] = useState([1])
    const { data, error, loading } = useFetch(
        `/products?page=${page}&limit=${limit}`,
    )

    const classes = useStyles()
    // Handlers
    const handleChange = (event, value) => {
        setPage(value)
    }

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
    }

    return (
        <>
            <Seo title="Tất cả sản phẩm" />
            <Box className="bg-collection bg-gray-900/60 bg-blend-overlay">
                <Box height={400} />
            </Box>
            <Box className="flex justify-center my-10">
                <Box width={1400}>
                    <Typography variant="h6" mb={6}>
                        Tất cả sản phẩm
                    </Typography>

                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <Typography mb={1} fontWeight={600}>
                                Lọc sản phẩm
                            </Typography>
                            <List>
                                {listOptionsFilter.map((option) => (
                                    <ListItem
                                        disablePadding
                                        key={option.value}
                                        secondaryAction={
                                            <Checkbox
                                                edge="end"
                                                // onChange={handleToggle(
                                                //     option.value,
                                                // )}
                                                // checked={
                                                //     checked.indexOf(
                                                //         option.value,
                                                //     ) !== -1
                                                // }
                                            />
                                        }
                                    >
                                        <ListItemButton>
                                            <ListItemText
                                                primary={option.label}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                            <List>
                                {listPriceFilter.map((option) => (
                                    <ListItem
                                        disablePadding
                                        key={option.value}
                                        secondaryAction={
                                            <Checkbox
                                                edge="end"
                                                // onChange={handleToggle(
                                                //     option.value,
                                                // )}
                                                // checked={
                                                //     checked.indexOf(
                                                //         option.value,
                                                //     ) !== -1
                                                // }
                                            />
                                        }
                                    >
                                        <ListItemButton>
                                            <ListItemText
                                                primary={option.label}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid
                            item
                            xs={9}
                            container
                            spacing={1}
                            className={classes.flexBox}
                        >
                            {loading ? (
                                <HashLoader color="#ff5100" />
                            ) : error ? (
                                <div>Error</div>
                            ) : (
                                data?.docs.map((item) => (
                                    <Grid xs={2.4} item key={item._id} mb={1}>
                                        <CardProduct
                                            product={item}
                                            loading={loading}
                                        />
                                    </Grid>
                                ))
                            )}
                        </Grid>
                    </Grid>
                    <Stack spacing={2}>
                        <Pagination
                            className="self-end"
                            count={data?.totalPages}
                            color="primary"
                            shape="rounded"
                            variant="outline"
                            onChange={handleChange}
                        />
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default Collection
