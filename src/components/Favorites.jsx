import { useGlobalContext } from "../contexts/GlobalContext";

export default function Favorites() {
    const { favorites, setFavorites, showFavorites, setShowFavorites } = useGlobalContext()

    return (
        <div>
            <h2>♥︎ Sailor Preferite ♥︎</h2>
            <div>
                <ul>
                    {favorites.map((item, i) => (
                        <li key={i}>{item.title}</li>
                    ))}
                    <button>Rimuovi dai preferiti</button>
                </ul>
            </div>
        </div>
    )

}