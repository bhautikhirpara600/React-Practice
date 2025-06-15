import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router"
import App from './App.jsx'
import Layout from './Components/Layout.jsx'
import CountryDetail from './Components/CountryDetail.jsx'
import Error from './Components/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path: "contact",
        element: <h1>Contact</h1>
      },
      {
        path: ":country",
        element: <CountryDetail />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)