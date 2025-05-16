import { useState, useMemo } from 'react'
import { useGlobalContext } from '../contexts/GlobalContext'
import Card from '../components/Card'

function SailorList() {

    const { sailor } = useGlobalContext()
    const [search, setSearch] = useState('')
    const [selectCategory, setSelectCategory] = useState('')
    const [sortOrder, setSortOrder] = useState(1)

    const filteredSailor = useMemo(() => {
        return [...sailor]
            .filter((sailor) => {
                const query = sailor.title.toLowerCase().includes(search.toLocaleLowerCase().trim())
                const category = selectCategory === '' || sailor.category === selectCategory
                return query && category
            })
            .sort((a, b) => {
                return a.title.localeCompare(b.title) * sortOrder
            })
    }, [search, sailor, selectCategory, sortOrder])

    console.log(sailor)

    return (
        <>
            <div>
                <h1>Lista Sailor</h1>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    name="category"
                    id="category"
                    onChange={(e) => setSelectCategory(e.target.value)}
                >
                    <option value="">Scegli</option>
                    <option value="Inner Senshi">Inner Senshi</option>
                    <option value="Outer Senshi">Outer Senshi</option>
                    <option value="Alleato">Alleato</option>
                    <option value="Starlights">Starlights</option>
                    <option value="Nemico">Nemico</option>
                </select>
            </div>
            <button
                onClick={() => {
                    setSortOrder(sortOrder * -1)
                }}>Ordina per nome</button>
            <div>
                {filteredSailor.map((sailor) => (
                    <Card key={sailor.id} sailor={sailor} />
                ))}
            </div>
        </>
    )
}

export default SailorList