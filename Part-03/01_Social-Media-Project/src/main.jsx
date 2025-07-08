import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CreatePost from './components/CreatePost.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostList from './components/PostList.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <PostList />
      },
      {
        path: "create-post",
        element: <CreatePost />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
