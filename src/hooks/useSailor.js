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

    return { sailor }
}

export default { useSailor }