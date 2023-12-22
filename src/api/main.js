import axios from "axios"
import { setToken } from "@/services/auth"
import mainAPI from "./base"
import { locationUrl } from "@/utils/const"

// Auth APIs
export const signUpAPI = async (data) => {
    return await mainAPI.post("/auth/sign-up", data)
}

export const signInAPI = async (data) => {
    const response = await mainAPI.post("/auth/sign-in", data)
    setToken(response.data.accessToken)
    return response.data
}

export const signInWithGoogleAPI = async (idToken) => {
    const response = await mainAPI.post("/auth/google-sign-in", { idToken })
    setToken(response.data.accessToken)
    return response.data
}

export const signOutAPI = async () => {
    return await mainAPI.post("/auth/sign-out", null)
}

//Verify

export const userAuthAPI = async (data) => {
    return await mainAPI.post("/auth/user-authentication", data)
}

export const verifyEmailOTPAPI = async (data) => {
    const res = await mainAPI.post("/auth/verify-email", data)
    return res.data
}

export const forgotAuthAPI = async (data) => {
    const res = await mainAPI.post("/auth/forgot-password", data)
    return res.data
}

export const verifyForgotPassAPI = async (data) => {
    const res = await mainAPI.post("/auth/verify-otp", data)
    return res.data
}

export const changePassAPI = async (data) => {
    const res = await mainAPI.post("/auth/change-password", data)
    return res.data
}

// PRODUCT API
export const createProductAPI = async (data) => {
    return await mainAPI.post("/products", data)
}

export const getProductDetailAPI = async (productId) => {
    const res = await mainAPI.get(`/products/find/${productId}`)
    return res.data
}

export const getAllProductsAPI = async () => {
    const res = await mainAPI.get("/products")
    return res.data
}

export const getAllProductsInFlashSaleAPI = async () => {
    const response = await mainAPI.get(`/products/flash-sale/products`)
    return response.data
}

export const createFlashSaleAPI = async (data) => {
    return await mainAPI.post("/dashboard/flash-sale/create", data)
}

export const createVoucherAPI = async (data) => {
    const response = await mainAPI.post("/voucher", data)
    return response.data
}

export const getRandomProductsAPI = async (num) => {
    return await mainAPI.get(`/products/random?num=${num}`)
}

export const getProductByFieldAPI = async (fields, value, limit, page) => {
    const response = await mainAPI.get(
        `/products/fields/search/?${fields}=${value}&limit=${limit}&page=${page}`,
    )
    return response.data
}

// User
export const getUserInfoAPI = async () => {
    const response = await mainAPI.get("/user/get-user")
    return response.data
}

export const addProductToCartAPI = async (payload) =>
    await mainAPI.post("/user/add-products-to-cart", payload)

export const removeProductFromCartAPI = async (itemId) => {
    return await mainAPI.put("/user/remove-product-from-cart", itemId)
}

export const getCartAPI = async () => {
    const response = await mainAPI.get("/user/get-user")
    return response.data.carts
}

export const clearCartAPI = async () => {
    return await mainAPI.patch("/user/clear-cart")
}

export const updatedUserAPI = async (fieldUpdate) => {
    const response = await mainAPI.patch("/user/update-user", fieldUpdate)
    return response.data
}
// Comment
export const createCommentAPI = async (data) => {
    return await mainAPI.post("/comment", data)
}

// Location
export const getLocationAPI = async () => {
    return await axios.get(`${locationUrl}/p`)
}

export const getDistrictsAPI = async (code) => {
    return await axios.get(`${locationUrl}/p/${code}?depth=2`)
}

// Order
export const createOrderAPI = async (payload) => {
    const response = await mainAPI.post("/order/", payload)
    return response.data
}

// Voucher
export const getAVoucherAPI = async (voucherCode) => {
    return await mainAPI.post("/voucher/find", voucherCode)
}

// Dashboard
