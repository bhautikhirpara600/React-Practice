import { Outlet } from 'react-router'
import './App.css'
import Header from './Components/Header'

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
