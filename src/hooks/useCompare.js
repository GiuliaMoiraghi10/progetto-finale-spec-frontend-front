import { useState } from "react";

function useCompare() {
    const [showCompare, setShowCompare] = useState(false)
    const [sailorsToCompare, setSailorsToCompare] = useState([])

    return { showCompare, setShowCompare, sailorsToCompare, setSailorsToCompare }
}

export default useCompare