       
import axios, { AxiosInstance } from "axios";
import { getSession, signOut } from "next-auth/react";
        
        export const axiosClient: AxiosInstance = axios.create({
        baseURL: "http://localhost:2025",
        headers: { "Content-Type": "application/json" },
        });

            // Add a request interceptor
            axiosClient.interceptors.request.use(async function (config) {
                // Do something before request is sent

                const session = await getSession();

                config.headers.Authorization = `Bearer ${session?.user?.accessToken}`

                console.log("session", session);
                return config;
            }, function (error) {
                // Do something with request error
                return Promise.reject(error);
            });


        axiosClient.interceptors.response.use(
            (response) => {
            return response;
            },
            (error) => {
                console.log('isi dari si error', error.response);
                if (error.response.status === 401) {
                    // alert("Session expired, please login again");
                    // signOut();
                }
                return Promise.reject(error);

                //jika statusnya 401 maka logout 
            }
            
        )
        
        export interface BaseResponsePagination {
        status: string;
        message: string;
        pagination: {
            page: number;
            limit: number;
            pageSize: number;
            total: number;
        };
        }
        export interface BaseResponseSuccess {
            status: string;
            message: string;
            data: any[] |any;
        }