import axios, { AxiosInstance } from "axios";

const URL: string = "https://randomuser.me/api/";

export const http: AxiosInstance = axios.create({
    baseURL: URL
});