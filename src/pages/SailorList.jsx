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
            <div className="bg-white/60 backdrop-blur-md border border-pink-200 rounded-3xl p-6 shadow-xl space-y-6 text-center mb-10 max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-pink-800">Lista Sailor</h1>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Cerca per nome..."
                        className="px-4 py-2 rounded-full border border-purple-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 w-full sm:w-64 text-purple-700"
                    />

                    <select
                        name="category"
                        id="category"
                        onChange={(e) => setSelectCategory(e.target.value)}
                        className="px-4 py-3 rounded-full border border-purple-200 shadow-sm bg-white text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full sm:w-64"
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
                    onClick={() => setSortOrder(sortOrder * -1)}
                    className=" cursor-pointer bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800 font-semibold px-6 py-2 rounded-full shadow hover:from-pink-300 hover:to-purple-300 transition"
                >
                    ✦ Ordina per nome
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {filteredSailor.map((sailor) => (
                    <Card key={sailor.id} sailor={sailor} />
                ))}
            </div>
        </>
    )
}

export default SailorList