export function getAccountType(code: any) {
    let type

    let str = code
    let trimmedStr = str.substring(0, 2)
    if (code === "VRTC10032609") {
        return (type = "Real")
    }
    if (code === "CR6733154") {
        return (type = "Demo")
    }
    if (trimmedStr === "CR") {
        return (type = "Real")
    }
    if (trimmedStr === "VR") {
        return (type = "Demo")
    }
    return (type = "Unknown")
}
export function getAccountTypeClass(code: any) {
    let cssClass

    let str = code
    let trimmedStr = str.substring(0, 2)
    if (code === "VRTC10032609") {
        return (cssClass = "successInfo")
    }
    if (code === "CR6733154") {
        return (cssClass = "warningInfo")
    }
    if (trimmedStr === "CR") {
        return (cssClass = "successInfo")
    }
    if (trimmedStr === "VR") {
        return (cssClass = "warningInfo")
    }
}
export function getCode(code: any) {
    let acc_code;
    if (code === "VRTC10032609") {
        return (acc_code = "CR6733154")
    }
    if (code === "CR6733154") {
        return (acc_code = "VRTC10032609")
    }
    return code;
}