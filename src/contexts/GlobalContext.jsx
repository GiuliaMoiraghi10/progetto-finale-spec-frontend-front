import { createContext, useContext } from "react";
import useSailor from "../hooks/useSailor";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    // variabile che contiene tutto il return di useSailor()
    const sailorData = useSailor()

    return (
        <GlobalContext.Provider value={{ ...sailorData }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext