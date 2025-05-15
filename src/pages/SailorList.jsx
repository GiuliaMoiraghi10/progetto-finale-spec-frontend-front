import { useState } from 'react'
import { GlobalProvider } from '../contexts/GlobalContext'

export default function SailorList() {

    const { sailor } = GlobalProvider()
    const [search, setSearch] = useState('')
    const [selectCategory, setSelectCategory] = useState('')

    const filteredSailor = () => {
        return [...sailor].filter((s) => {
            const query = s.title.toLowerCase().includes(search.toLowerCase().trim())
            const category = selectCategory === '' || s.category === selectCategory
            return query && category
        })
    }

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
                    <option value="">Inner Senshi</option>
                    <option value="">Outer Senshi</option>
                    <option value="">Alleato</option>
                    <option value="">Starlights</option>
                    <option value="">Nemico</option>
                </select>
            </div>
            <button>Ordina per nome</button>
            <div>
                {filteredSailor.map((s) => {
                    <div key={s.id}>{s.title}</div>
                })}
            </div>
        </>
    )
}