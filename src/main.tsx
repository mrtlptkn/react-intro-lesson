import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Test from './components/Test.tsx'
import Todos from './components/Todos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Test /> */}
    {/* <Test></Test> */}
    <Todos />
  </StrictMode>,
)
