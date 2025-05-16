import { useGlobalContext } from "../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function Card({ sailor }) {
    const { id, title, image, category } = sailor

    const navigate = useNavigate()

    const toDetail = (id) => {
        navigate(`/sailors/${id}`)
    }

    return (
        <>
            <div>
                <button onClick={() => toDetail(id)}>Dettagli</button>
                <h2>{title}</h2>
                <img src={image} alt="" />
                <p>{category}</p>
            </div>
            <div>
                <button>♥︎</button>
                <button>⇄</button>
            </div>
        </>
    )
}