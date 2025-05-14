import { useState, useEffects } from 'react'

function useSailor() {
    const [sailor, setSailor] = useState([])

    const fetchSailor = async () => {
        const response = await fetch("http://localhost:3001/sailors")
        const data = await response.json()
        setSailor(data)
    }

    useEffects(() => {
        fetchSailor
    }, [])

    // getSailor x prendere i dati di una singola Sailor tramite id
    const getSailor = async (id) => {
        const response = await fetch(`http://localhost:3001/sailors/${id}`)
        const data = await response.json()
        return data
    }

    return { sailor, setSailor, getSailor }
}

export default { sailor }