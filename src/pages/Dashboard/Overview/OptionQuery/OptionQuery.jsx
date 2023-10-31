import { Fragment, useState } from "react"
import { CalendarMonth } from "@mui/icons-material"
import {
    Box,
    Divider,
    FormControl,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material"
import { listQueryOfTypeDate, optionsListQuery } from "@/utils/components"
import useStyles from "@/assets/styles"

const OptionQuery = () => {
    const [valueQuery, setValueQuery] = useState(optionsListQuery[0])
    const classes = useStyles()
    const handleChange = (event) => {
        setValueQuery(event.target.value)
    }

    return (
        <>
            <Stack direction="row" spacing={0.5} alignItems="center" pb={1}>
                <CalendarMonth color="warning" />
                <FormControl fullWidth>
                    <Select
                        variant="standard"
                        value={valueQuery}
                        onChange={handleChange}
                    >
                        {optionsListQuery.map((option, index) => (
                            <MenuItem
                                key={index}
                                value={option}
                                disabled={option === valueQuery}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Stack>
            <Stack spacing={2} mt={2}>
                {listQueryOfTypeDate.map((option, index) => (
                    <Fragment key={index}>
                        <Stack direction="row" spacing={1}>
                            <Box
                                sx={{
                                    width: 30,
                                    height: 30,
                                    bgcolor: "rgba(126, 166, 161, 0.27)",
                                    borderRadius: 4,
                                }}
                                className={classes.flexBox}
                            >
                                {option.icon}
                            </Box>
                            <Stack>
                                <Typography variant="caption">
                                    {option.label}
                                </Typography>
                                <Typography variant="caption" color="green">
                                    {option.number}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Divider variant="fullWidth" />
                    </Fragment>
                ))}
            </Stack>
        </>
    )
}

OptionQuery.propTypes = {}

export default OptionQuery
