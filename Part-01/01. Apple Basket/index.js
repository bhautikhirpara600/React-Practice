import {createRoot} from 'react-dom/client'
import { MainSection } from './Components/MainSection'
import './Components/style.css'

const root = createRoot(document.querySelector("#root"))

root.render(
    <div><MainSection /></div>
)
