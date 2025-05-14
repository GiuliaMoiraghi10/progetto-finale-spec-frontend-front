import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import { GlobalProvider } from "./contexts/GlobalContext"
import HomePage from "./pages/HomePage"
import SailorList from "./pages/SailorList"
import SailorDetail from "./pages/SailorDetail"

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/sailors" element={<SailorList />}></Route>
              <Route path="/sailors/:id" element={<SailorDetail />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
