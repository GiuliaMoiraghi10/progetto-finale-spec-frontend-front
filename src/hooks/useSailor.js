import { useState, useEffect } from 'react' // Corretto import

function useSailor() {
    const [sailor, setSailor] = useState([])

    // fetchSailor per prendere i dati di tutte le Sailor
    const fetchSailor = async () => {
        try {
            const response = await fetch("http://localhost:3001/sailors")
            const data = await response.json()
            setSailor(data)
            console.log("Dati fetchSailor:", data) // Log dei dati
        }
        catch (error) {
            console.error(error)
        }
    }

    // useEffect per chiamare fetchSailor quando il componente viene montato
    useEffect(() => {
        fetchSailor()
    }, [])

    // getSailor per prendere i dati di una singola Sailor tramite id
    const getSailor = async (id) => {
        const response = await fetch(`http://localhost:3001/sailors/${id}`)
        const data = await response.json()
        console.log("Dati getSailor:", data) // Log dei dati
        return data
    }

    return { sailor, setSailor, getSailor }
}

export default useSailor;
