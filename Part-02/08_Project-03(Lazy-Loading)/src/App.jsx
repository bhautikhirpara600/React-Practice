import { Outlet } from "react-router"
import Header from "./components/Header"
import { DisplayPopupProvider } from "./contexts/DisplayPopup"
import { Suspense } from "react"

function App() {

  return (
    <DisplayPopupProvider>
      <Header />
      <Suspense fallback={<h1 className="text-3xl font-bold">Loading...</h1>}>
        <Outlet />
      </Suspense>
    </DisplayPopupProvider>
  )
}

export default App
