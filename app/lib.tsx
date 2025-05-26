import { axiosClient } from "@/lib/axiosClient";



export const socialLogin = async (payload: socialPayload) : Promise<Response> => {
    return axiosClient.post("/auth/social-login", payload);
}