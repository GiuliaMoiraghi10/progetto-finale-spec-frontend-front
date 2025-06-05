import { useGlobalContext } from "../contexts/GlobalContext";
import { Link } from "react-router-dom";

export default function Favorites() {
    const { favorites, setFavorites, showFavorites, setShowFavorites } = useGlobalContext();
    // favorites contiene l'array dei personaggi preferiti
    // setFavorites è la funzione per aggiornare l'array dei preferiti
    // showFavorites è un booleano che indica se il pannello dei preferiti è visibile
    // setShowFavorites è la funzione per aggiornare la visibilità del pannello

    // Funzione per rimuovere un personaggio dai preferiti
    // prende un oggetto item (personaggio) come argomento
    // e aggiorna lo stato dei preferiti filtrando l'array per rimuovere l'item specifico
    const removeFavorites = (item) => {
        setFavorites((currFav) => currFav.filter((s) => s.id !== item.id));
    };

    return (
        <div
            className={`z-50 fixed top-0 right-0 w-96 h-full grid grid-rows-[60px_1fr] transition duration-300 ease-in-out
            ${showFavorites ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
            bg-gradient-to-br from-pink-100 via-white/70 to-purple-100 border-l-4 border-pink-300 shadow-2xl backdrop-blur-md rounded-l-3xl`}
        >
            {/* Header con bottone chiusura */}
            <div className="grid gap-4 p-4 bg-white/60 backdrop-blur rounded-tr-3xl shadow-sm">
                <button
                    className=" cursor-pointer bg-gradient-to-r from-pink-300 to-purple-300 text-purple-800 font-semibold px-4 py-2 rounded-full shadow hover:from-pink-400 hover:to-purple-400 transition"
                    onClick={() => setShowFavorites(false)}
                >
                    ✖ Chiudi
                </button>
            </div>

            {/* Contenuto del pannello */}
            <div className="overflow-y-auto px-5 pb-6">
                <h2 className="text-2xl font-bold text-pink-800 mb-4 mt-4 text-center">♥ Personaggi Preferiti ♥</h2>

                <ul className="flex flex-col gap-4 text-purple-800">
                    {favorites.map((item, i) => (
                        <li
                            className="bg-white/70 border border-pink-200 p-4 rounded-xl shadow hover:bg-pink-50 transition text-center flex flex-col items-center"
                            key={i}
                        >
                            <Link
                                to={`/sailors/${item.id}`}
                                className="flex flex-col items-center w-full cursor-pointer hover:underline"
                                onClick={() => setShowFavorites(false)} // chiudi il pannello quando vai al dettaglio
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-24 h-32 object-cover rounded-xl mx-auto mb-2 shadow"
                                />
                                <div className="font-bold mb-2">{item.title}</div>
                            </Link>
                            <button
                                className="cursor-pointer self-center mt-2 bg-pink-200 hover:bg-pink-300 text-red-700 font-medium px-5 py-2 rounded-full shadow transition"
                                onClick={() => removeFavorites(item)}
                            >
                                Rimuovi dai preferiti
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}