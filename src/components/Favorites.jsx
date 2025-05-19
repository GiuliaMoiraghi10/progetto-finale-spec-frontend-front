import { useGlobalContext } from "../contexts/GlobalContext";

export default function Favorites() {
    const { favorites, setFavorites, showFavorites, setShowFavorites } = useGlobalContext()

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
                            className="bg-white/70 border border-pink-200 p-4 rounded-xl shadow hover:bg-pink-50 transition text-center"
                            key={i}
                        >
                            {item.title}
                        </li>
                    ))}

                    <button
                        className="cursor-pointer self-center mt-6 bg-pink-200 hover:bg-pink-300 text-red-700 font-medium px-5 py-2 rounded-full shadow transition"
                    >
                        Rimuovi dai preferiti
                    </button>
                </ul>
            </div>
        </div>
    )

}