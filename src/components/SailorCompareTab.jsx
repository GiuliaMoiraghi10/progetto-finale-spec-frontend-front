import SailorCompareCard from "./SailorCompareCard";
import Favorites from "./Favorites";

export default function SailorCompareTab() {
    return (
        <>
            <Favorites
                title="Personaggi a confronto"
                description="Seleziona i personaggi da confrontare"
                content={<SailorCompareCard />}
                show={true}
                onClose={() => { }}
                onRemove={() => { }}
            />
        </>
    )
}