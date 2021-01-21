import { useState } from 'react';
import AllocateRooms from './AllocateRooms';
import AllocatedRooms from './AllocatedRooms'
import './App.css';
import SetUpPage from './SetupPage';

function App() {
  const [state, setState] = useState('set-up')
  const [choices, setChoices] = useState()
  const [allocations, setAllocations] = useState(null)

  function onAllocateRooms(choices) {
    var result = AllocateRooms(choices)
    setAllocations(result)
    setChoices(choices)
    setState('allocated')
  }

  function displayPage() {
    switch (state) {
      case 'set-up':
        return <SetUpPage allocateRooms={onAllocateRooms} />
      case 'allocated':
        return (
          <AllocatedRooms 
            allocations={allocations}
            choices={choices}
            reallocateRooms={onAllocateRooms}
            setState={setState}
          />
        )
      default:
        return <p>Somethings gone wrong</p>
    }
  }

  return (
    <div className="App">
      {displayPage()}
    </div>
  );
}

export default App;
