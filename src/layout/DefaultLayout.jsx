import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import SailorCompareTab from "../components/SailorCompareTab"

export default function Defaultlayout() {
    return (
        <div id="root" className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <Outlet />
                <SailorCompareTab />
            </main>
            <Footer />
        </div>
    )
}