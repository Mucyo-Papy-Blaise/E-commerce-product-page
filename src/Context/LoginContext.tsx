import React, { createContext } from "react";

interface LoginContextTypes{
    userName: any;
    setUsername: React.Dispatch<React.SetStateAction<string>>
    showHome: boolean;
    setShowHome: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginContext = createContext<LoginContextTypes>({
    userName: "",
    setUsername: () => {},
    showHome: false,
    setShowHome: () => {}
})
