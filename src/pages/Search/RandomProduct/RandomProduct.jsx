import PropTypes from "prop-types"
import {
    Box,
    List,
    ListItemButton,
    Paper,
    Stack,
    Typography,
} from "@mui/material"
import { useState, useEffect } from "react"
import Image from "mui-image"
import { Link } from "react-router-dom"
import { getRandomProductsAPI } from "@/api/main"
import useStyles from "@/assets/styles"
import SkeletonFallback from "@/components/fallback/Skeleton/SkeletonFallback"

const RandomProduct = ({ nameValue }) => {
    const [data, setData] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const classes = useStyles()
    useEffect(() => {
        const fetch = async () => {
            try {
                setIsFetching(true)
                const res = await getRandomProductsAPI(10)
                setData(res.data)
                setIsFetching(false)
            } catch (error) {
                console.error(error)
                setIsFetching(false)
            }
        }
        fetch()
    }, [nameValue])

    if (isFetching) {
        return (
            <Box>
                <SkeletonFallback />
            </Box>
        )
    }

    return (
        <List>
            {data?.map((item) => (
                <Link
                    key={item._id}
                    className={classes.hoverItem}
                    to={`/products/${item._id}`}
                >
                    <Paper
                        sx={{
                            marginBottom: "12px",
                        }}
                        elevation={2}
                    >
                        <ListItemButton key={item._id}>
                            <Stack direction="row" spacing={1}>
                                <Box>
                                    <Image
                                        width={100}
                                        height={100}
                                        alt={item.name}
                                        src={item.productImages?.[0]}
                                        duration={500}
                                    />
                                </Box>
                                <Stack spacing={1}>
                                    <Typography
                                        variant="body2"
                                        fontWeight={600}
                                    >
                                        {item.name}
                                    </Typography>
                                    <Typography color="error">
                                        {item.price.toLocaleString("vi-VN")} đ
                                    </Typography>
                                </Stack>
                            </Stack>
                        </ListItemButton>
                    </Paper>
                </Link>
            ))}
        </List>
    )
}

RandomProduct.propTypes = {
    nameValue: PropTypes.string.isRequired,
}

export default RandomProduct
