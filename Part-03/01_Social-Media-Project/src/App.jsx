import './App.css'
import Home from './components/Home'
import PostListContextProvider from './store/Store'

function App() {

  return (
    <PostListContextProvider>
      <Home />
    </PostListContextProvider>
  )
}

export default App
