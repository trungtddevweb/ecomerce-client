import { Suspense } from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet, ScrollRestoration } from "react-router-dom"
import SpinnerAnimation from "@/components/fallback/Spinner/SpinnerAnimation"

const NoHeaderLayout = () => {
    const checkLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const accessToken = useSelector((state) => state.auth.user.accessToken)
    const isAdmin = useSelector((state) => state.auth.user.role === "admin")

    if (!checkLoggedIn || !accessToken || !isAdmin)
        return <Navigate to="/sign-in" replace />

    return (
        <>
            <Suspense fallback={<SpinnerAnimation />}>
                <Outlet />
                <ScrollRestoration />
            </Suspense>
        </>
    )
}

export default NoHeaderLayout
