import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Pagina non trovata</h1>
            <p className="text-lg text-gray-700 mb-6">La pagina che stai cercando non esiste.</p>
            <Link to="/" className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                Torna alla Home
            </Link>
        </div>
    );
}