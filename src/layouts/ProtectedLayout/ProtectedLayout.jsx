import { Suspense } from "react"
import { Navigate, Outlet, ScrollRestoration } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SpinnerAnimation from "@/components/fallback/Spinner"
import { pathRoutes } from "@/utils/const"
import { isAuthenticated } from "@/services/auth"
const ProtectedLayout = () => {
    if (!isAuthenticated()) {
        return <Navigate to={pathRoutes.signIn} replace />
    }

    return (
        <>
            <Header />
            <main className="mt-20 min-h-screen">
                <Suspense fallback={<SpinnerAnimation />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default ProtectedLayout
