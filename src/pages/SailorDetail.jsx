import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom' // useparams per ottenere l'id della sailor dall' URL
import { useGlobalContext } from '../contexts/GlobalContext' // accede ai preferiti e alla funzione per recuperare una sailor
import { useCompareContext } from '../contexts/CompareContext' // permette di aggiungere una sailor alla lista di confronto

export default function SailorDetail() {

    const { id } = useParams() // identificativo della sailor dall' URL
    const { getSailor } = useGlobalContext() // funzione per recuperare dati di una singola sailor
    const { favorites, setFavorites } = useGlobalContext() // array dei preferiti e funzione per aggiornarli
    const { compareSailors, sailorsToCompare } = useCompareContext() // funzione per gestire il confronto
    const [sailor, setSailor] = useState() // stato per memorizzare i dati della sailor una volta recuperati
    const navigate = useNavigate() // hook per navigare tra le pagine

    // Stato per mostrare la modale di avviso
    const [showMaxCompareModal, setShowMaxCompareModal] = useState(false)

    useEffect(() => {
        // effettua una chimata asincrona al primo rendering del componente per
        // recuperare i dati della sailor
        async function getSailorData() {
            try {
                const data = await getSailor(id)
                // chiama la funzione getSailor con l'id per ottenere i dati della
                // singola sailor e li salva nello stato sailor
                setSailor(data.sailor)
            } catch (error) {
                console.error("Errore nel recupero dei dati:", error)
            }
        }
        getSailorData() // chiama la funzione per recuperare i dati della sailor
    }, [])

    const handleFavorite = (id) => { // se la sailor non è tra i preferiti,la aggiunge, altrimenti la rimuove
        if (!favorites.some((fav) => fav.id === id)) {
            setFavorites((prevFav) => [...prevFav, sailor])
        } else {
            setFavorites((prevFav) => prevFav.filter((s) => s.id !== id))
        }
    }

    // Gestione click confronto con modale
    const handleCompareClick = () => { // se ci sono già 2 personaggi in confronto e la sailor non è già tra quelli,
        // mostra una modale di avviso, altrimenti chiama la funzione per confrontare
        if (sailorsToCompare.length >= 2 && !sailorsToCompare.some(s => s.id === sailor.id)) {
            setShowMaxCompareModal(true)
            return
        }
        compareSailors(sailor.id)
    }

    if (!sailor) { // se i dati della sailor non sono ancora stati caricati,
        // mostra un messaggio di caricamento
        return <p>Caricamento...</p>
    }

    const { title, category, image, description, planet, solarSystem, transformation, weapons } = sailor
    console.log("Dettagli Sailor:", sailor)

    return (
        <>
            {/* Modale di avviso se si stanno già confrontando 2 personaggi */}
            {showMaxCompareModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center gap-4 max-w-xs">
                        <div className="text-pink-800 font-bold text-lg text-center">
                            Stai già confrontando 2 personaggi!
                        </div>
                        <button
                            className=" cursor-pointer mt-2 px-6 py-2 rounded-full bg-pink-200 text-pink-800 font-semibold shadow hover:bg-pink-300 transition"
                            onClick={() => setShowMaxCompareModal(false)}
                        >
                            Ok
                        </button>
                    </div>
                </div>
            )}

            <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md border border-pink-200 rounded-3xl p-8 shadow-xl space-y-8 text-purple-800 mt-10">
                {/* Bottone per tornare alla lista */}
                <button
                    className="cursor-pointer mb-4 bg-purple-200 hover:bg-purple-300 text-purple-800 px-4 py-2 rounded-full shadow transition"
                    onClick={() => navigate('/sailors')}
                >
                    ← Torna alla lista
                </button>
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
                        onClick={handleCompareClick}
                    >
                        ⇄
                    </button>
                </div>
            </div>
        </>
    )
}