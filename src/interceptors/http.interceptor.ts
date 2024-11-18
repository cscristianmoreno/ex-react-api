import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { http } from "../services/http.service";

export class HttpInterceptor {
    constructor() {
        this.initializeInterceptor();
    }

    private initializeInterceptor(): void {
        http.interceptors.request.use((req: InternalAxiosRequestConfig<unknown>): InternalAxiosRequestConfig<unknown> => {
            req.headers["Authorization"] = "Bearer token";
            return req;
        });

        http.interceptors.response.use(
            (res: AxiosResponse<unknown>): AxiosResponse<unknown> => {
                return res;
            },
            (error: Error): void => {
                throw new Error(error.message);
            }
        );
    }
}