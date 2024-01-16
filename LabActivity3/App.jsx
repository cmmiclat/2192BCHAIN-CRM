//  Miclat, Chadle Rei M.

import './App.css'
import ShinyButton from './components/Conditional-Demo-1'
import IsItRainy from './components/Conditional-Demo-2'
import RorS from './components/Conditional-Demo-3'
import Ternary_RorS from './components/Conditional-Demo-4'

function App() {

  return (
    <>
    <div className='card bg-gray'>
      <div className='card-Item'>
        <h2>Conditional Demo 1</h2>
        <ShinyButton />
      </div>
      <div className='card-Item'>
        <h2>Conditional Demo 2</h2>
        <IsItRainy />
      </div>
      <div className='card-Item'>
        <h2>Conditional Demo 3</h2>
        <RorS />
      </div>
      <div className='card-Item'>
        <h2>Conditional Demo 3</h2>
        <Ternary_RorS />
      </div>
    </div>
    </>
  )
}

export default App