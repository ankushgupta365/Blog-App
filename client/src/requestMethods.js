import axios from "axios";

const BASE_URL = "http://localhost:5000/api"
const PRODUCTION_URL = "https://blogapi.cudigiclass.in/api"


export const publicRequest = axios.create({
    baseURL: PRODUCTION_URL
})
