"use client";
import React from "react";
import Swal from "sweetalert2";
import { axiosClient } from "@/lib/axiosClient";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // gunakan ini di App Router
import { LoginPayload, LoginResponse, ProfileResponse } from "../interface";
import { useMutation, useQuery } from "@tanstack/react-query";

const useAuthModule = () => {
  const toastError = (message: string) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    });
  };

  const toastSuccess = (message: string) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
    });
  };

  const toastWarning = (message: string) => {
    Swal.fire({
      icon: "warning",
      title: "Warning",
      text: message,
    });
  };

  const login = async (payload: LoginPayload): Promise<LoginResponse | any> => {
    return axiosClient.post("/auth/login", payload).then((res) => res.data);
  };

   const getProfile = async (): Promise<ProfileResponse> => {
    return axiosClient.get("/auth/profile").then((res) => res.data);
  };
 

  const useProfile = () => {
    const { data, isLoading, isFetching } = useQuery<ProfileResponse>({
      queryKey: ["/auth/profile"],
      queryFn: () => getProfile(),
      select: (response: ProfileResponse) => response,
      staleTime: 1000 * 60 * 60,
      refetchInterval: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
    });

    return { data, isLoading, isFetching };
  };
  const useLogin = () => {
    const router = useRouter(); // dipindahkan ke sini
    const { data: session } = useSession(); // dipindahkan ke sini

    const mutate: any = useMutation({
      mutationFn: (payload: LoginPayload) => login(payload),
      onSuccess: async (response) => {
        await signIn("credentials", {
          id: response.data.id,
          name: response.data.nama,
          email: response.data.email,
          accessToken: response.data.access_token,
          refreshToken: response.data.refresh_token,
          role: "admin",
          redirect: false,
          access: ["read", "create", "update", "delete", "list"],
        });

        router.push("/dashboard"); // ⬅ Redirect langsung setelah login

      // toastSuccess("Login berhasil!");  
      },
      onError: (error: any) => {
        if (error.response?.status == 422) {
          toastWarning("Data tidak valid.");
        } else {
          toastError("Terjadi kesalahan saat login.");
        }
      },
    });

    return mutate;
  };

  return { useLogin, useProfile};
};

export default useAuthModule;
