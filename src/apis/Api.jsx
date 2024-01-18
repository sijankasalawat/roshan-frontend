import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-Type" : "multipart/form-data"
    }
})

export const registerApi=(data)=>Api.post("/api/user/register",data)
export const loginApi=(data)=>Api.post("/api/user/login",data)

export const createLicenseApi = (formData) => Api.post('/api/license/create_license',formData)
export const getAllLicenseApi = () => Api.get("/api/license/get_license")

