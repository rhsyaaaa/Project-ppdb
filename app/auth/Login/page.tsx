"use client";
import { useFormik, Form, FormikProvider, getIn } from "formik";
import Image from "next/image";
import Link from "next/link";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthModule from "../lib/interface";
import { LoginPayload } from "../interface";
import Loading from "@/components/loading";
import { signIn, useSession } from "next-auth/react";

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .nullable()
    .default("")
    .email("Gunakan format email")
    .required("Wajib isi"),
  password: yup
    .string()
    .nullable()
    .default("")
    .required("Wajib isi")
    .min(8, "Minimal 8 karakater"),
});

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession();
  const { useLogin } = useAuthModule();
  const mutate = useLogin();
  // Redirect jika sudah login
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  

  const formik = useFormik<LoginPayload>({
    initialValues: registerSchema.getDefault(),
    validationSchema: registerSchema,
    enableReinitialize: true,
    onSubmit: (payload) => {
      mutate.mutate(payload);
    },
  });
  const { handleChange, handleSubmit, handleBlur, values, errors } = formik;

  if (status === "loading" || status === "authenticated") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    return (
      <>
        <div className="min-h-screen flex bg-gray-100">
          {/* Left Side - Login Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-10 bg-white">
            <div className="max-w-md w-full space-y-6">
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                  <Image
                    src="/assets/mq.png"
                    width={80}
                    height={80}
                    alt="SMK Logo"
                  />
                  <div className="text-sm text-green-900">
                    <div>Sekolah Menengah Kejuruan</div>
                    <div className="font-bold">MADINATUL QURAN</div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-center text-gray-800 mt-4 mb-3">
                  Login to Your Account
                </h2>
                <p className="text-xl text-gray-500">Select method to login</p>
              </div>

              {/* Google Login */}

              {/* Login Form */}

              <FormikProvider value={formik}>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <button
                    type="button" // <-- tambahkan ini agar tidak submit form
                    className="w-full flex items-center justify-center gap-4 border border-gray-300 rounded-lg py-3 hover:shadow-lg transition"
                    onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                  >
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google"
                      className="w-6 h-6"
                    />
                    <span className="text-base font-normal text-gray-800">
                      Sign In with Google
                    </span>
                  </button>

                  <div className="text-center text-gray-500 text-sm">
                    or Login with
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Gmail"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border border-gray-300 rounded px-4 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border border-gray-300 rounded px-4 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  {error && <div className="text-red-500 text-sm">{error}</div>}
                  <button
                    type="submit"
                    className="w-full bg-green-700 text-white font-semibold py-3 rounded hover:bg-green-800 transition"
                    title="login"
                  >
                    Login
                  </button>
                  <a
                    href="/auth/forgot-password"
                    className="text-sm text-black"
                  >
                    Forgot password?
                  </a>
                </form>
              </FormikProvider>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="hidden md:flex w-1/2 bg-green-900 items-center justify-center p-8">
            <Image
              src="/assets/bro.png" // Pastikan file ini ada di /public
              alt="Login Illustration"
              width={500}
              height={500}
              className="rounded-xl drop-shadow-2xl"
            />
          </div>
        </div>
      </>
    );
  }
};
export default LoginPage;
