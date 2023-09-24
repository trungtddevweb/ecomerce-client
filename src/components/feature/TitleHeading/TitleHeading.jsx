import { Typography } from "@mui/material"
import PropTypes from "prop-types"

const TitleHeading = ({ title }) => {
  return (
    <Typography variant="h6" fontWeight={500}>
      {title}
    </Typography>
  )
}

TitleHeading.propTypes = {
  title: PropTypes.string.isRequired,
}

export default TitleHeading
