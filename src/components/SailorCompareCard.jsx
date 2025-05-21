import { useCompareContext } from "../contexts/CompareContext";

export default function SailorCompareCard({ sailor }) {
    const { setSailorsToCompare } = useCompareContext();

    if (!sailor) return null;

    const handleRemove = () => {
        setSailorsToCompare((prev) => prev.filter((s) => s.id !== sailor.id));
    };

    const { title, image, category, description, planet, solarSystem, transformation, weapons } = sailor;

    return (
        <div className="bg-pink-50 border border-pink-200 rounded-3xl p-4 shadow-md flex flex-col items-center text-center space-y-3 w-80">
            <h2 className="text-xl font-bold text-pink-800">{title}</h2>
            <img
                src={image}
                alt={title}
                className="rounded-xl shadow-md h-80 w-48 object-cover"
            />
            <p className="text-sm text-purple-600">{category}</p>
            <p className="text-base text-purple-800">{description}</p>
            <div className="mt-2 text-purple-700 text-sm">
                <p><strong>Pianeta:</strong> {planet}</p>
                <p><strong>Sistema Solare:</strong> {solarSystem}</p>
                <p><strong>Trasformazioni:</strong> {transformation}</p>
                <p><strong>Armi:</strong> {weapons}</p>
            </div>
            <button onClick={handleRemove} className="mt-2 bg-pink-200 px-3 py-1 rounded-full">
                Rimuovi
            </button>
        </div>
    );
}