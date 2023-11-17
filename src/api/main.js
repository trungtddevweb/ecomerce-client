import { setToken } from "@/services/auth"
import mainAPI from "./base"

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

export const getProductDetailAPI = async (productId) => {
    const res = await mainAPI.get(`/products/find/${productId}`)
    return res.data
}

export const getAllProductsAPI = async () => {
    const res = await mainAPI.get("/products")
    return res.data
}

// User
export const getUserInfoAPI = async () => {
    const response = await mainAPI.get("/user/get-user")
    return response.data
}

// export const getPostByTagAPI = async (tagName) => {
//   const res = await mainAPI.get(`/post/tag/${tagName}`)
//   return res.data
// }

// export const getPostTrendingAPI = async () => {
//   const res = await mainAPI.get("/post/trending")
//   return res.data
// }

// export const getPostSavedAPI = async () => {
//   const res = await mainAPI.get("/user/find/saved-post")
//   return res.data
// }

// export const toggleLikePostAPI = async (postId) => {
//   const res = await mainAPI.post("/post/toggle-like", { postId })
//   return res.data
// }

// User
// export const addPostToSaveAPI = async (postId) => {
//   const res = await mainAPI.post("/user/saved-post", { postId })
//   return res.data
// }

// Comment
export const createCommentAPI = async (data) => {
    const res = await mainAPI.post("/comment/", data)
    return res.data
}
