import { createContext, useContext } from "react";
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

    return (
        <CompareContext.Provider
            value={{
                showCompare,
                setShowCompare,
                sailorsToCompare,
                setSailorsToCompare,
                compareSailors,
            }}
        >
            {children}
        </CompareContext.Provider>
    );
}