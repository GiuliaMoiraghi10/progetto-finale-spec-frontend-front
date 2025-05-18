import { NavLink } from "react-router-dom"
import { useGlobalContext } from "../contexts/GlobalContext"
import Favorites from "./Favorites"

export default function Header() {

    const { showFavorites, setShowFavorites } = useGlobalContext()

    const handleShowFavorites = () => {
        !showFavorites ? setShowFavorites(true) : setShowFavorites(false)
    }

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sailors">Sailors</NavLink>
                    </li>
                </ul>
                <div>
                    <Favorites />
                    <button onClick={() => handleShowFavorites()}>Personaggi Preferiti</button>
                </div>
            </nav>
        </header>
    )
}