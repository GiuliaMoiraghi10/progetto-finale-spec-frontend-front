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
            <div className="bg-pink-50 border border-pink-200 rounded-3xl p-4 shadow-md flex flex-col items-center text-center space-y-3 mb-4">
                <button
                    onClick={() => toDetail(id)}
                    className="cursor-pointer bg-purple-200 hover:bg-purple-300 text-purple-800 px-4 py-2 rounded-full shadow-sm transition"
                >
                    ✨ Dettagli
                </button>

                <h2 className="text-xl font-bold text-pink-800">{title}</h2>

                <img
                    src={image}
                    alt=""
                    className="rounded-xl shadow-md max-h-48 object-cover"
                />

                <p className="text-sm text-purple-600">{category}</p>

                <div className="flex gap-4 mt-2">
                    <button className="cursor-pointer bg-pink-200 hover:bg-pink-300 text-red-600 px-3 rounded-full shadow-sm transition text-lg">
                        ♥︎
                    </button>
                    <button className="cursor-pointer bg-blue-200 hover:bg-blue-300 text-blue-700 px-3 rounded-full shadow-sm transition text-lg">
                        ⇄
                    </button>
                </div>
            </div>

        </>
    )
}