import { createContext, useContext } from "react";

const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext)
}

export function GlobalProvider({ children }) {
    return (
        <GlobalContext.Provider>{children}</GlobalContext.Provider>
    )
}