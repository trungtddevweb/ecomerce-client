export function formatDate(dateString) {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
}

export function formatTagNames(tagName) {
    switch (tagName.toLowerCase()) {
        case "music":
            return "Âm nhạc"
        case "technology":
            return "Công nghệ"
        case "cuisine":
            return "Ẩm thực"
        case "sharing":
            return "Tâm sự"
        case "traveling":
            return "Du lịch"
        case "youth":
            return "Thanh xuân"
        default:
            return "Chia sẻ"
    }
}

export function formatNumber(input) {
    // Lấy giá trị số nhập vào
    const value = input.valueAsNumber

    // Kiểm tra nếu giá trị không phải là NaN
    if (!isNaN(value)) {
        // Định dạng giá trị số theo định dạng tiền tệ vi-VN
        const formattedValue = value.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        })

        // Cập nhật giá trị định dạng vào TextField
        input.value = formattedValue
    }
}

export const formatPrice = (value) => {
    if (typeof value === "number") {
        return value.toLocaleString("vi-VN")
    }
    return
}
