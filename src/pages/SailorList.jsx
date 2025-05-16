import { useState, useMemo } from 'react'
import { useGlobalContext } from '../contexts/GlobalContext'

function SailorList() {

    const { sailor } = useGlobalContext()
    const [search, setSearch] = useState('')
    const [selectCategory, setSelectCategory] = useState('')
    const [sortOrder, setSortOrder] = useState(1)

    const filteredSailor = useMemo(() => {
        return [...sailor]
            .filter((s) => {
                const query = s.title.toLowerCase().includes(search.toLocaleLowerCase().trim())
                const category = selectCategory === '' || s.category === selectCategory
                return query && category
            })
            .sort((a, b) => {
                return a.title.localeCompare(b.title) * sortOrder
            })
    }, [search, sailor, selectCategory])

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
            <button>Ordina per nome</button>
            <div>
                {filteredSailor.map((s) => (
                    <div key={s.id}>{s.title}</div>
                ))}
            </div>
        </>
    )
}

export default SailorList