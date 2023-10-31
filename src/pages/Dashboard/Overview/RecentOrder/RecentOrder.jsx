import { Schedule, ShoppingBag } from "@mui/icons-material"
import {
    Box,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Typography,
} from "@mui/material"
import Image from "mui-image"

const RecentOrder = () => {
    const data = [
        {
            imageUrl:
                "https://bizweb.dktcdn.net/100/415/697/products/1-a76844f8-43b5-4ba4-8f94-08ff2f36394a.jpg?v=1657108723990",
            nameProduct: "Áo thun polo",
            tag: "Ao",
            price: 200000,
            time: "2 minutes ago",
        },
        {
            imageUrl:
                "https://bizweb.dktcdn.net/100/415/697/products/1-a76844f8-43b5-4ba4-8f94-08ff2f36394a.jpg?v=1657108723990",
            nameProduct: "Quần âu",
            tag: "Quan",
            price: 200000,
            time: "2 minutes ago",
        },
        {
            imageUrl:
                "https://bizweb.dktcdn.net/100/415/697/products/1-a76844f8-43b5-4ba4-8f94-08ff2f36394a.jpg?v=1657108723990",
            nameProduct: "Áo sơ mi nam",
            tag: "Ao",
            price: 200000,
            time: "2 minutes ago",
        },
    ]

    return (
        <Box>
            <Paper
                sx={{
                    height: "25vh",
                    borderRadius: 6,
                    p: 2,
                }}
                elevation={4}
            >
                <Stack direction="row" spacing={1} mb={1}>
                    <ShoppingBag color="info" fontSize="small" />
                    <Typography>Đơn hàng mới nhất</Typography>
                </Stack>
                <Divider variant="fullWidth" />
                {data.map((item, index) => (
                    <Stack key={index} spacing={0.5} direction="row">
                        <ListItem disableGutters>
                            <ListItemIcon>
                                <Image
                                    width={40}
                                    height={40}
                                    src={item.imageUrl}
                                    alt={item.nameProduct}
                                    className="rounded-md"
                                />
                            </ListItemIcon>
                            <ListItemText>
                                <Stack ml={1}>
                                    <Typography variant="subtitle2">
                                        {item.nameProduct}
                                    </Typography>
                                    <Typography variant="caption" color="gray">
                                        {item.tag}
                                    </Typography>
                                </Stack>
                            </ListItemText>
                            <ListItemIcon>
                                <Stack>
                                    <Typography
                                        variant="subtitle2"
                                        textAlign="right"
                                    >
                                        6000$
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        spacing={0.5}
                                    >
                                        <Schedule
                                            fontSize="inherited"
                                            color="disabled"
                                        />
                                        <Typography
                                            variant="caption"
                                            color="gray"
                                        >
                                            {item.time}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </ListItemIcon>
                        </ListItem>
                    </Stack>
                ))}
            </Paper>
        </Box>
    )
}

export default RecentOrder
