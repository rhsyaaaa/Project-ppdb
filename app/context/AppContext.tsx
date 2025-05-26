"use client"
 
// contexts/AppContext.tsx
import { createContext, useState, ReactNode, useContext } from 'react';
 
// Tentukan tipe untuk nilai yang disediakan oleh konteks
interface AppContextType {
  theme: string;
  toggleTheme: () => void;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}
 
// Buat nilai default untuk konteks
const defaultContextValue: AppContextType = {
  theme: 'light',
  toggleTheme: () => {},
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
};
 
// Buat context dengan nilai default yang valid
export const AppContext = createContext<AppContextType>(defaultContextValue);
 
interface AppProviderProps {
  children: ReactNode;
}
 

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<string>('light');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
 
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
 
  const login = () => {
    setIsAuthenticated(true);
  };
 
  const logout = () => {
    setIsAuthenticated(false);
  };

  const RandomColor = () =>{
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`
  }
 
  return (
    <AppContext.Provider value={{ theme, toggleTheme, isAuthenticated, login, logout, RandomColor }}>
      {children}
    </AppContext.Provider>
  );
}
 