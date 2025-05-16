import { useState, useEffects } from 'react'

function useSailor() {
    // stato per le Sailor
    const [sailor, setSailor] = useState([])

    // fetchSailor x prendere i dati di tutte le Sailor
    const fetchSailor = async () => {
        try {
            const response = await fetch("http://localhost:3001/sailors")
            const data = await response.json()
            setSailor(data)
        }
        catch (error) {
            console.error(error)
        }

        // useEffects x chiamare la funzione fetchSailor() quando il componente viene montato
        useEffects(() => {
            fetchSailor()
        }, [])
    }

    // getSailor x prendere i dati di una singola Sailor tramite id
    const getSailor = async (id) => {
        const response = await fetch(`http://localhost:3001/sailors/${id}`)
        const data = await response.json()
        return data
    }

    return { sailor, setSailor, getSailor }
}

export default useSailor;
