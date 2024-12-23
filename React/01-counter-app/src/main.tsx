import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FirstApp from './FirsApp'
import CounterApp from './CounterApp'

import './styles.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='container'>
    <FirstApp nombre='Javier' apellidos='Pedrote Molina' />
    <CounterApp value={37} />
    </div>
    <div className='container'>
    <FirstApp nombre='Rocio' apellidos='Verdon Rodriguez'/>
    <CounterApp value={34} />
    </div>

  </StrictMode>,
)
