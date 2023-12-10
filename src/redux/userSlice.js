import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    user: {},
    carts: [],
    order: {},
    voucher: "",
}

export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logoutSuccess: (state) => {
            state.user = {}
            state.isLoggedIn = false
            state.carts = []
        },
        loginSuccess: (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload
            state.carts = action.payload.carts
        },
        addProductToCart: (state, action) => {
            // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
            const existingProduct = state.carts.find(
                (product) =>
                    product.productId === action.payload.productId &&
                    product.color === action.payload.color,
            )
            if (existingProduct) {
                // Nếu đã tồn tại, tăng số lượng sản phẩm
                existingProduct.quantity += action.payload.quantity
            } else {
                // Nếu chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
                state.carts = action.payload
            }
        },
        removeProductFromCart: (state, action) => {
            state.carts = state.carts.filter(
                (product) => product._id !== action.payload,
            )
        },
        createOrder: (state, action) => {
            state.order = action.payload
        },
        clearCart: (state) => {
            state.carts = []
        },
        usingVoucher: (state, action) => {
            state.voucher = action.payload
        },
    },
})

export const {
    logoutSuccess,
    loginSuccess,
    addProductToCart,
    removeProductFromCart,
    clearCart,
    usingVoucher,
} = userSlice.actions

export default userSlice.reducer
