import SailorCompareCard from "./SailorCompareCard";
import { useCompareContext } from "../contexts/CompareContext";

export default function SailorCompareTab() {
    const { showCompare, sailorsToCompare, closeCompare } = useCompareContext();

    if (!showCompare) return null;

    return (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
            <div className="bg-white rounded-3xl p-8 shadow-xl flex gap-8 relative">
                <button
                    className="cursor-pointer absolute top-4 right-4 bg-pink-200 px-4 py-2 rounded-full"
                    onClick={closeCompare}
                >
                    Chiudi
                </button>
                {sailorsToCompare.length === 0 && (
                    <div className="text-purple-700 mt-10">
                        <strong>Seleziona due personaggi da confrontare!</strong>
                        <p>Clicca sull'icona ⇄ sotto i personaggi che desideri</p>
                    </div>
                )}
                {sailorsToCompare.map((sailor) => (
                    <SailorCompareCard key={sailor.id} sailor={sailor} />
                ))}
            </div>
        </div>
    );
}