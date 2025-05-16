import { createContext, useContext } from "react";
import useSailor from "../hooks/useSailor";

const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext)
}

export function GlobalProvider({ children }) {
    // variabile che contiene tutto il return di useSailor()
    const { sailor, setSailor, getSailor } = useSailor()

    return (
        <GlobalContext.Provider value={{ sailor, setSailor, getSailor }}>
            {children}
        </GlobalContext.Provider>
    )
}
