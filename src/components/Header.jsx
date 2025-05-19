import { NavLink } from "react-router-dom"
import { useGlobalContext } from "../contexts/GlobalContext"
import Favorites from "./Favorites"

export default function Header() {

    const { showFavorites, setShowFavorites } = useGlobalContext()

    const handleShowFavorites = () => {
        !showFavorites ? setShowFavorites(true) : setShowFavorites(false)
    }

    return (
        <header className="bg-pink-100 shadow-lg rounded-b-2xl p-4 flex items-center justify-between flex-col md:flex-row">
            <Favorites />

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
                            Sailors
                        </NavLink>
                    </li>
                </ul>

                <div
                    className="mt-4 bg-yellow-100 text-purple-700 px-4 py-2 rounded-full cursor-pointer shadow hover:bg-yellow-200 transition"
                    onClick={() => handleShowFavorites()}
                >
                    ✨ Personaggi Preferiti ✨
                </div>
            </nav>
        </header>

    )
}