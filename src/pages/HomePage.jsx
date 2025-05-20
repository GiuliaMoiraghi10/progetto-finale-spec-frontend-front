export default function HomePage() {
    return (
        <>
            <div className="p-10 m-10 bg-pink-50/60 border border-pink-200 rounded-3xl p-4 shadow-md flex flex-col items-center text-center space-y-3 mb-4">
                <h2 className="text-5xl font-bold text-pink-400">Benvenutə nel mondo di</h2>
                <h1 className="text-6xl font-bold text-pink-500">Sailor Moon!</h1>
                <hr className="my-6 border-t-4 border-pink-300 w-1/2 mx-auto rounded" />
                <strong className="text-xl text-purple-600 italic">In questo sito potrai:</strong>
                <ul className="text-lg text-purple-400">
                    <li>
                        <strong>✨ Scoprire</strong> i personaggi della serie ✨
                    </li>
                    <li>
                        <strong>✨ Salvare</strong> i tuoi personaggi preferiti ✨
                    </li>
                    <li>
                        <strong>✨ Confrontare</strong> 2 personaggi tra di loro ✨
                    </li>
                </ul>
                <hr className="my-6 border-t-4 border-pink-300 w-1/2 mx-auto rounded" />
                <img
                    className="w-full max-h-200 object-cover rounded-xl shadow-md"
                    src="https://i.pinimg.com/736x/68/e6/06/68e606fac670a3199dc23da852ed100a.jpg" alt="" />

                <h2 className="mt-7 text-5xl font-bold text-pink-400 italic">Buon divertimento!</h2>
            </div >
        </>
    )
}