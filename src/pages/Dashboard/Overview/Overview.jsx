import CardDashboard from "@/components/feature/CardDashboard"
import { listItemsOverview } from "@/utils/components"
import { Box, Grid, Paper } from "@mui/material"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts"
import OptionQuery from "./OptionQuery"
import RecentOrder from "./RecentOrder"
import PopularProduct from "./PopularProduct"

const Overview = () => {
    const data = [
        {
            name: "1",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: " 2",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: " 3",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: " 4",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: " 5",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: " 6",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: " 7",
            uv: 3490,
            pv: 4125,
            amt: 2100,
        },
        {
            name: " 8",
            uv: 3490,
            pv: 1204,
            amt: 2100,
        },
        {
            name: " 9",
            uv: 3490,
            pv: 7010,
            amt: 2100,
        },
        {
            name: " 10",
            uv: 3490,
            pv: 2400,
            amt: 2100,
        },
        {
            name: " 11",
            uv: 3490,
            pv: 3200,
            amt: 2100,
        },
        {
            name: " 12",
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ]

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item container spacing={4}>
                    {listItemsOverview.map((item, index) => (
                        <Grid item key={index} md={2.4}>
                            <CardDashboard data={item} />
                        </Grid>
                    ))}
                </Grid>
                <Grid item container spacing={4}>
                    <Grid item md={9}>
                        <Paper
                            elevation={4}
                            sx={{
                                borderRadius: 6,
                            }}
                        >
                            <Box height="50vh" p={2}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        width={500}
                                        height={300}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="pv"
                                            stroke="#8884d8"
                                            activeDot={{ r: 8 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item md={3}>
                        <Paper
                            elevation={4}
                            sx={{
                                borderRadius: 6,
                            }}
                        >
                            <Box height="50vh" p={2}>
                                <OptionQuery />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item container spacing={4}>
                    <Grid item md={4}>
                        <RecentOrder />
                    </Grid>
                    <Grid item md={8}>
                        <PopularProduct />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Overview
