import { useState, useEffect } from 'react'

function useSailor() {
    const [sailor, setSailor] = useState([]) // stato che contiene lista sailor e setSailor per aggiornare stato, inizializzato come array vuoto

    // funzione asincrona per ottenere la lista di tutte le Sailor
    const fetchSailor = async () => {
        try {
            const response = await fetch("http://localhost:3001/sailors")
            const data = await response.json() // converte la risposta in formato JSON
            setSailor(data) // salva il risultato nello stato sailor
            console.log("Dati fetchSailor:", data) // Log dei dati
        }
        catch (error) {
            console.error(error) // gestisce eventuali errori durante la fetch
        }
    }

    // useEffect per chiamare fetchSailor uan sola volta quando il componente viene montato
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

    // ritorna l'array di sailor, la funzione setSailor quando si aggiorna lo stato
    // e la funzione detSailor per ottenere i dettagli di una singola Sailor
    return { sailor, setSailor, getSailor }
}

export default useSailor;
