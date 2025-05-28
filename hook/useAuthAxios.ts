import { axiosClient } from "@/lib/axiosClient";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

const useAxiosAuth = () => {
  const { data: session } = useSession();

  useEffect(() => {
    const requestIntercept = axiosClient.interceptors.request.use(
      (config: any) => {
        config.headers["Authorization"] = `Bearer ${session?.user?.accessToken}`;
        return config;
      },
      (error: any) => Promise.reject(error)
    );

    const responseIntercept = axiosClient.interceptors.response.use(
      (response: any) => response,
      (error: any) => {
        if (401 === error?.response?.status) {
          signOut();
          window.location.replace("/auth/login");
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosClient.interceptors.request.eject(requestIntercept);
      axiosClient.interceptors.response.eject(responseIntercept);
    };
  }, [session]);

  return axiosClient;
};

export default useAxiosAuth;