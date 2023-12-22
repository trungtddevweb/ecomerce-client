export function formatDate(dateString) {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
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

export const formatCellValue = (value, rowData) => {
    if (value === "createdAt" || value === "startTime" || value === "endTime") {
        return formatDate(rowData[value])
    } else if (typeof rowData[value] === "boolean") {
        return rowData[value].toString()
    } else if (typeof rowData[value] === "object") {
        return rowData[value].length
    } else if (typeof rowData[value] === "number") {
        return formatPrice(rowData[value])
    } else {
        return rowData[value]
    }
}
