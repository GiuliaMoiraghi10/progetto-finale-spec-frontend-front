import { createContext, useContext, useEffect } from "react";
import { useGlobalContext } from "./GlobalContext";
import useCompare from "../hooks/useCompare";

const CompareContext = createContext();

export function useCompareContext() {
    return useContext(CompareContext);
}

export function CompareProvider({ children }) {
    const { getSailor } = useGlobalContext();
    const { showCompare, setShowCompare, sailorsToCompare, setSailorsToCompare } = useCompare();

    // Funzione per ottenere un sailor
    async function getItem(id) {
        const data = await getSailor(id);
        return data.sailor;
    }

    // Funzione per aggiungere/rimuovere sailor dal confronto
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