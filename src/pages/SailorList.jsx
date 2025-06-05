import { useState, useMemo, useCallback, useEffect } from 'react'
// useState per gestire lo stato locale (search, selectCategory, sortorder)
// useMemo per ottimizzare i calcoli sui dati filtrati e ordinati
import { useGlobalContext } from '../contexts/GlobalContext'
// useGlobalContext per accedere al contesto globale che contiene i dati delle Sailor
import Card from '../components/Card'

// Funzione di debounce generica
const debounce = (callback, delay) => { // callback function che è la funzione che voglio debounceare e delay è il tempo di attesa
    let timer; // qui salvo il timer - scope closure
    return (value) => { // ritorna la funzione debounceata che accetta un valore
        clearTimeout(timer) // pulissco il timeout del timer precedente
        timer = setTimeout(() => { // salvo dentro al timer un nuovo timeout
            callback(value) // richiamo la callback passata come argomento con il valore passato
        }, delay)
    }
}

function SailorList() { // Pagina SailorList per visualizzare la lista delle Sailor 

    const { sailor } = useGlobalContext()

    const [search, setSearch] = useState('')
    const [selectCategory, setSelectCategory] = useState('')
    const [sortOrder, setSortOrder] = useState(1)

    const [error, setError] = useState('')

    const debouncedSearch = useCallback(
        debounce(setSearch, 500)
        , [])


    const filteredSailor = useMemo(() => {
        return [...sailor]
            .filter((s) => {
                const query = s.title.toLowerCase().includes(search.toLowerCase().trim())
                const category = selectCategory === '' || s.category === selectCategory
                return query && category
            })
            .sort((a, b) => {
                return a.title.localeCompare(b.title) * sortOrder
            })
    }, [search, sailor, selectCategory, sortOrder])


    useEffect(() => {
        if (filteredSailor.length === 0) {
            setError('Nessun personaggio trovato.');
        } else {
            setError('');
        }
    }, [filteredSailor]);

    return (
        <>
            <figure>
                <img
                    src="https://i.pinimg.com/1200x/49/ad/b2/49adb29e32be3829fde828fb6ac85bef.jpg"
                    alt=""
                    className="w-full min-h-160 sm:h-80 md:h-96 object-cover mt-8"
                />
            </figure>
            <div className="bg-white/60 backdrop-blur-md border border-pink-200 rounded-3xl p-6 shadow-xl space-y-6 text-center mb-10 max-w-5xl mx-auto mt-10">
                <h1 className="text-3xl font-bold text-pink-800">Lista Personaggi</h1>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <input
                        type="text"
                        onChange={(e) => debouncedSearch(e.target.value)} // aggiorna lo stato di ricerca con il valore dell'input
                        placeholder="Cerca per nome..."
                        className="bg-white px-4 py-2 rounded-full border border-purple-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 w-full sm:w-64 text-purple-700"
                    />

                    <select
                        name="category"
                        id="category"
                        onChange={(e) => setSelectCategory(e.target.value)} // aggiorna lo stato della categoria selezionata
                        className="px-4 py-3 rounded-full border border-purple-200 shadow-sm bg-white text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full sm:w-64"
                    >
                        <option value="">Scegli categoria</option>
                        <option value="Inner Senshi">Inner Senshi</option>
                        <option value="Outer Senshi">Outer Senshi</option>
                        <option value="Alleato">Alleato</option>
                        <option value="Starlights">Starlights</option>
                        <option value="Nemico">Nemico</option>
                    </select>
                </div>

                <button
                    onClick={() => setSortOrder(sortOrder * -1)} // cambia l'ordine di ordinamento al click del bottone
                    className=" cursor-pointer bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800 font-semibold px-6 py-2 rounded-full shadow hover:from-pink-300 hover:to-purple-300 transition"
                >
                    ✦ Ordina per nome
                </button>
            </div>

            {/* Messaggio di errore se nessun personaggio trovato */}
            {error && (
                <div className="text-xl text-white bg-pink-500 p-6 text-center font-semibold mb-100 ">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {filteredSailor.map((sailor) => ( // mappa i dati filtrati e ordinati per creare una Card per ogni Sailor
                    <Card key={sailor.id} sailor={sailor} /> // per ogni sailor, passa i dati alla Card come prop
                ))}
            </div>
        </>
    )
}

export default SailorList