import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../contexts/GlobalContext'
import { useCompareContext } from '../contexts/CompareContext'

export default function SailorDetail() {

    const { id } = useParams()
    const { getSailor } = useGlobalContext()
    const { favorites, setFavorites } = useGlobalContext();
    const { compareSailors } = useCompareContext();
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

    const handleFavorite = (id) => {
        if (!favorites.some((fav) => fav.id === id)) {
            setFavorites((prevFav) => [...prevFav, sailor]);
        } else {
            setFavorites((prevFav) => prevFav.filter((s) => s.id !== id));
        }
    };

    if (!sailor) {
        return <p>Caricamento...</p>
    }

    const { title, category, image, description, planet, solarSystem, transformation, weapons } = sailor
    console.log("Dettagli Sailor:", sailor)

    return (
        <>
            <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md border border-pink-200 rounded-3xl p-8 shadow-xl space-y-8 text-purple-800 mt-10">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-pink-700 mb-4">Dettagli Personaggio</h1>
                </div>

                <hr className="my-6 border-t-4 border-pink-300 w-1/2 mx-auto rounded" />

                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold text-purple-700">{title}</h2>
                    <img
                        src={image}
                        alt={title}
                        className="mx-auto rounded-xl shadow-md h-150 object-cover"
                    />
                    <p className="text-m text-pink-600 italic">{category}</p>
                    <p className="text-base text-purple-800">{description}</p>
                </div>

                <div className="bg-pink-100/50 border border-pink-200 rounded-2xl p-6 shadow-inner space-y-3">
                    <h3 className="text-xl font-semibold text-pink-700">✦ Dettagli aggiuntivi:</h3>
                    <p><span className="font-semibold text-purple-700">Pianeta:</span> {planet ? planet : "Nessun dato"}</p>
                    <p><span className="font-semibold text-purple-700">Sistema Solare:</span> {solarSystem ? solarSystem : "Nessun dato"}</p>
                    <p><span className="font-semibold text-purple-700">Trasformazioni:</span> {transformation !== undefined ? transformation : "Nessun dato"}</p>
                    <p><span className="font-semibold text-purple-700">Armi:</span> {weapons ? weapons : "Nessun dato"}</p>
                </div>

                <div className="flex gap-4 mt-4 justify-center">
                    <button
                        className="cursor-pointer bg-pink-200 hover:bg-pink-300 text-red-600 px-3 rounded-full shadow-sm transition text-lg"
                        onClick={() => handleFavorite(sailor.id)}
                    >
                        {favorites.some((fav) => fav.id === sailor.id) ? "♥︎" : "♡"}
                    </button>
                    <button
                        className="cursor-pointer bg-blue-200 hover:bg-blue-300 text-blue-700 px-3 rounded-full shadow-sm transition text-lg"
                        onClick={() => compareSailors(sailor.id)}
                    >
                        ⇄
                    </button>
                </div>
            </div>
        </>
    )
}