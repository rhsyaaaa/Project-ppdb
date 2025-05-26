"use client";
import { ReactNode, useContext } from "react";
import clsx from "clsx";
import { signOut, useSession } from "next-auth/react";
import { AppContext } from "@/app/context/AppContext";
import Button from "./Button";

 
interface ThemeProps {
  title: string;
  children: ReactNode;
}
 
const AppTheme: React.FC<ThemeProps> = ({ title, children }) => {
  const appContext = useContext(AppContext);
  const {status}= useSession();
  const {theme} = appContext; 
  return (
    <>
      <header
        className={clsx(
          ` w-full  h-[5%] flex font-semibold items-center px-5`,
          {
            "bg-green-500": theme === "light",
            "bg-gray-800 text-white ": theme === "dark",
          }
        )}
      >
        {title}
        {status === 'authenticated' && (
          <Button title="Logout" colorSchema="red" onClick={() => signOut()} />
        )}
      </header>
      <div
        className={clsx(` h-full w-full`, {
          "bg-white": theme === "light",
          "bg-gray-800 text-white ": theme === "dark",
        })}
      >
        {children}
      </div>
    </>
  );
};
 
export default AppTheme;
 