import { createContext, useContext, useState } from "react";
import useSailor from "../hooks/useSailor";

const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
    const { sailor, setSailor, getSailor } = useSailor();

    const [favorites, setFavorites] = useState([])
    const [showFavorites, setShowFavorites] = useState(false)

    return (
        <GlobalContext.Provider value={{ sailor, setSailor, getSailor, favorites, setFavorites, showFavorites, setShowFavorites }}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext }; 
