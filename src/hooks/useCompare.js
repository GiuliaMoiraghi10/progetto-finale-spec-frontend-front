import { useState } from "react";

// custom hook per gestire il confronto tra Sailor
function useCompare() {
    const [showCompare, setShowCompare] = useState(false) // booleano che indica se il pannello di confronto deve essere visibile o no
    const [sailorsToCompare, setSailorsToCompare] = useState([]) // array che contiene i personaggi selezionati per il confronto

    return { showCompare, setShowCompare, sailorsToCompare, setSailorsToCompare }
    // ritorna gli stati e le funzioni per gestire il confronto tra Sailor
    // questo oggetto viene poi  usato dal CompareContext per fornire queste info al resto della app
}

export default useCompare