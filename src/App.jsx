import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import { GlobalProvider } from "./contexts/GlobalContext"
import HomePage from "./pages/HomePage"
import SailorList from "./pages/SailorList"
import SailorDetail from "./pages/SailorDetail"
import { CompareProvider } from "./contexts/CompareContext"
import NotFound from "./pages/NotFound"


function App() {

  return (
    <>
      <GlobalProvider>
        <CompareProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/sailors" element={<SailorList />}></Route>
                <Route path="/sailors/:id" element={<SailorDetail />}></Route>
              </Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </BrowserRouter>
        </CompareProvider>
      </GlobalProvider>
    </>
  )
}

export default App
