import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCompareContext } from "../contexts/CompareContext";

export default function Card({ sailor }) { // Componente Card che rappresenta una singola Sailor e riceve i dati della Sailor come prop
    const { id, title, image, category } = sailor; // destruttura i dati della Sailor per accedere a id, title, image e category
    const { compareSailors, sailorsToCompare } = useCompareContext(); // importa il contesto CompareContext x accedere alla funzione compareSailors

    const navigate = useNavigate(); // usa Hook useNavigate x navigare tra le pagine

    // Stato per mostrare la modale di avviso
    const [showMaxCompareModal, setShowMaxCompareModal] = useState(false);

    const toDetail = (id) => { // funzione che renderizza alla pagina dei dettagli della Sailor tramite id
        navigate(`/sailors/${id}`);
    };

    // Gestione click confronto
    const handleCompareClick = () => { // se ci sono già 2 personaggi a confronto e la Sailor non è già tra quelli,
        // mostra modale di avviso, altrimenti chiama la funzione per confrontare
        if (sailorsToCompare.length >= 2 && !sailorsToCompare.some(s => s.id === id)) {
            setShowMaxCompareModal(true);
            return;
        }
        compareSailors(id);
    };

    return (
        <>
            {/* Modale di avviso se si stanno confrontando già 2 personaggi */}
            {showMaxCompareModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center gap-4 max-w-xs">
                        <div className="text-pink-800 font-bold text-lg text-center">
                            Stai già confrontando 2 personaggi!
                        </div>
                        <button
                            className="cursor-pointer mt-2 px-6 py-2 rounded-full bg-pink-200 text-pink-800 font-semibold shadow hover:bg-pink-300 transition"
                            onClick={() => setShowMaxCompareModal(false)}
                        >
                            Ok
                        </button>
                    </div>
                </div>
            )}

            <div className="bg-pink-50 border border-pink-200 rounded-3xl p-4 shadow-md flex flex-col items-center text-center space-y-3 mb-4">
                <button
                    onClick={() => toDetail(id)}
                    className="cursor-pointer bg-purple-200 hover:bg-purple-300 text-purple-800 px-4 py-2 rounded-full shadow-sm transition"
                >
                    ✨ Scoprimi!
                </button>

                <h2 className="text-xl font-bold text-pink-800">{title}</h2>

                <img
                    src={image || "https://i.pinimg.com/736x/37/7c/ef/377cef039cd7c40b597e36c79aaf8a68.jpg"}
                    alt={title}
                    className="rounded-xl shadow-md max-h-48 w-48 object-cover"
                />

                <p className="text-sm text-purple-600">{category}</p>

                <div className="flex gap-4 mt-2">
                    <button
                        className="cursor-pointer bg-blue-200 hover:bg-blue-300 text-blue-700 px-3 rounded-full shadow-sm transition text-lg"
                        onClick={handleCompareClick}
                    >
                        ⇄
                    </button>
                </div>
            </div>
        </>
    );
}