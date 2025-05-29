import { createContext, useContext, useState } from "react";
import useSailor from "../hooks/useSailor"; // custom hook per gestire fetch dei dati delle Sailor

const GlobalContext = createContext();
// Creo contesto globale che serve a condividere dati tra componenti senza passare
// props manualmente

export function useGlobalContext() {
    return useContext(GlobalContext);
} // invece di fare useContext(GlobalContext) in ogni componente, creo custom hook
// per semplificare l'accesso al contesto

export function GlobalProvider({ children }) {
    // questa funzione definisce un provider che avvolge tutti i componenti figli,
    // rendendo disponibili i dati del context a tutti i figli
    const { sailor, setSailor, getSailor } = useSailor(); // recupero lista sailor, aggiornamento stato e sailor specifica
    const [favorites, setFavorites] = useState([]) // stato per gestire i preferiti
    const [showFavorites, setShowFavorites] = useState(false) // stato per gestire la visualizzazione dei preferiti


    return (
        <GlobalContext.Provider value={{ sailor, setSailor, getSailor, favorites, setFavorites, showFavorites, setShowFavorites }}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext }; 
