import { createContext, useContext, useEffect } from "react";
import { useGlobalContext } from "./GlobalContext";
import useCompare from "../hooks/useCompare";

const CompareContext = createContext(); // crea contesto condiviso per il confronto tra sailor

export function useCompareContext() { // custom hook per accedervi facilmente
    return useContext(CompareContext);
}

export function CompareProvider({ children }) {
    // funzione che fornisce i dati e le funzioni del confronto a tutti i componenti figli
    const { getSailor } = useGlobalContext(); // recupera funzione per ottenere i dati di una Sailor specifica
    const { showCompare, setShowCompare, sailorsToCompare, setSailorsToCompare } = useCompare();
    // recupera showCompare con booleano per mostrare/nascondere confronto,
    // sailorsToCompare con array di Sailor da confrontare
    // setShowCompare e setSailorsToCompare per aggiornare stati

    // Funzione per ottenere una Sailor
    async function getItem(id) {
        const data = await getSailor(id);
        return data.sailor;
    }

    // Funzione per aggiungere/rimuovere sailor dal confronto.
    // Se la Sailor non è già presente nell'array sailorsToCompare e l'array ha meno di
    // 2 elementi, la aggiunge. Altrimenti se la Sailor è già presente, la rimuove dall'array
    const compareSailors = async (id) => {
        if (
            !sailorsToCompare.some((sailor) => sailor.id === id) &&
            sailorsToCompare.length < 2
        ) {
            const sailor = await getItem(id);
            setSailorsToCompare((prevSailor) => [...prevSailor, sailor]);
        } else if (sailorsToCompare.some((sailor) => sailor.id === id)) {
            setSailorsToCompare((prevSailor) =>
                prevSailor.filter((sailor) => sailor.id !== id)
            );
        }
    };

    // Funzione per chiudere il compare
    function closeCompare() {
        setShowCompare(false)
    }

    // Funzione per aprire il compare
    function toggleCompare() {
        showCompare ? setShowCompare(false) : setShowCompare(true)
    }

    // Effect per aggiornare lo stato showCompare in base alla lunghezza dell'array sailorsToCompare
    // Se l'array è vuoto, setShowCompare è impostato a false, altrimenti a true
    useEffect(() => {
        sailorsToCompare.length < 1 ? setShowCompare(false) : setShowCompare(true)
    }, [sailorsToCompare])

    return (
        <CompareContext.Provider
            value={{
                compareSailors,
                showCompare,
                toggleCompare,
                closeCompare,
                sailorsToCompare,
                setSailorsToCompare
            }}
        >
            {children}
        </CompareContext.Provider>
    );
}