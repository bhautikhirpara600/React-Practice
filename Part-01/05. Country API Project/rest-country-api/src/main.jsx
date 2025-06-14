import { createBrowserRouter, RouterProvider } from "react-router"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MainSection from "./Components/MainSection.jsx";
import CountryDetail from "./Components/CountryDetail.jsx";
import Error from "./Components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainSection />
      },
      {
        path: "/:country",
        element: <CountryDetail />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
