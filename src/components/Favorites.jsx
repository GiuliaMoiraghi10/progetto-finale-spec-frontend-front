import { useGlobalContext } from "../contexts/GlobalContext";

export default function Favorites() {
    const { favorites, setFavorites, showFavorites, setShowFavorites } = useGlobalContext()

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-t border-pink-200 shadow-xl p-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xl font-bold text-pink-700 text-center mb-1">
                    ♥︎ Sailor Preferite ♥︎
                </h2>

                <ul className="flex flex-wrap justify-center gap-3 text-purple-800 font-medium">
                    {favorites.map((item, i) => (
                        <li
                            key={i}
                            className="bg-pink-100 rounded-full px-4 py-1 shadow-sm hover:bg-pink-200 transition"
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>

                <div className="mt-4 flex justify-center">
                    <button className="bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800 font-semibold px-6 py-2 rounded-full shadow hover:from-pink-300 hover:to-purple-300 transition">
                        ✘ Rimuovi dai preferiti
                    </button>
                </div>
            </div>
        </div>
    )

}