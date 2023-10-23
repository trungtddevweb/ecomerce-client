import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { redirect } from "react-router-dom"

const withCredential = (WrappedComponent) => {
    const AuthHOC = (props) => {
        const checkLoggedIn = useSelector((state) => state.auth.isLoggedIn)
        const accessToken = useSelector((state) => state.auth.user.accessToken)
        if (!checkLoggedIn || !accessToken) return redirect("/sign-in")
        return <WrappedComponent {...props} />
    }
    return AuthHOC
}

withCredential.propTypes = {
    WrappedComponent: PropTypes.node.isRequired,
}

export default withCredential
