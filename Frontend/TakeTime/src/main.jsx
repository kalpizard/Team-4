import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { TakeTime } from './TakeTime.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TakeTime />
  </StrictMode>,
)
