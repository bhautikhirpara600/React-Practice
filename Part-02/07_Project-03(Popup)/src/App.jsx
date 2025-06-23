import { Outlet } from "react-router"
import Header from "./components/Header"
import { DisplayPopupProvider } from "./contexts/DisplayPopup"

function App() {

  return (
    <DisplayPopupProvider>
      <Header />
      <Outlet />
    </DisplayPopupProvider>
  )
}

export default App
