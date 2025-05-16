import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../contexts/GlobalContext'

export default function SailorDetail() {

    const { id } = useParams()
    const { getSailor } = useGlobalContext()
    const [sailor, setSailor] = useState()

    useEffect(() => {
        async function getSailorData() {
            try {
                const data = await getSailor(id)
                setSailor(data.sailor)
            } catch (error) {
                console.error("Errore nel recupero dei dati:", error)
            }
        }
        getSailorData()
    }, [])

    if (!sailor) {
        return <p>Caricamento...</p>
    }

    const { title, category, image, description, planet, solarSystem, transformation, weapons } = sailor
    console.log("Dettagli Sailor:", sailor)

    return (
        <>
            <div>
                <h1>Dettagli Sailor</h1>
            </div>
            <div>
                <h2>{title}</h2>
                <img src={image} alt="" />
                <p>{category}</p>
                <p>{description}</p>
            </div>
            <div>
                <h3>Dettagli aggiuntivi:</h3>
                <p>Pianeta: {planet ? planet : "Nessun dato"}</p>
                <p>Sistema Solare: {solarSystem ? solarSystem : "Nessun dato"}</p>
                <p>Trasformazioni: {transformation !== undefined ? transformation : "Nessun dato"}</p>
                <p>Armi: {weapons ? weapons : "Nessun dato"}</p>
            </div>
        </>
    )
}