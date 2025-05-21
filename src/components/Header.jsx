import { NavLink } from "react-router-dom"
import { useGlobalContext } from "../contexts/GlobalContext"
import Favorites from "./Favorites"
import { useCompareContext } from "../contexts/CompareContext"
import SailorCompareTab from "./SailorCompareTab";


export default function Header() {

    const { showFavorites, setShowFavorites } = useGlobalContext()
    const { toggleCompare, showCompare } = useCompareContext()

    const handleShowFavorites = () => {
        !showFavorites ? setShowFavorites(true) : setShowFavorites(false)
    }

    return (
        <header className="bg-pink-100 shadow-lg rounded-b-2xl p-4 flex items-center justify-between flex-col md:flex-row">
            <Favorites />
            <SailorCompareTab />

            <nav className="mt-4 md:mt-0">
                <ul className="flex gap-4 text-purple-800 font-semibold">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'underline decoration-yellow-300 decoration-2'
                                    : 'hover:text-pink-500 transition'
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/sailors"
                            className={({ isActive }) =>
                                isActive
                                    ? 'underline decoration-yellow-300 decoration-2'
                                    : 'hover:text-pink-500 transition'
                            }
                        >
                            Sailors & Co
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <section className="flex items-center justify-center mt-4 md:mt-0 gap-5">
                <div
                    className="bg-yellow-100 text-purple-700 px-4 py-2 rounded-full cursor-pointer shadow hover:bg-yellow-200 transition"
                    onClick={() => handleShowFavorites()}
                >
                    ✨ Personaggi Preferiti ✨
                </div>
                <button
                    onClick={() => toggleCompare()}
                    className="bg-pink-400 text-white px-4 py-2 rounded-full cursor-pointer shadow hover:bg-pink-500 transition"
                >✨ Confronta Personaggi ✨</button>
            </section>
        </header>

    )
}