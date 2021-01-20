import { useState } from 'react';
import AllocateRooms from './AllocateRooms';
import './App.css';
import SetUpPage from './SetupPage';

function App() {
  const [state, setState] = useState('set-up')
  const [allocations, setAllocations] = useState(null)

  function onAllocateRooms(choices) {
    var result = AllocateRooms(choices)
    setAllocations(result)
    setState('allocated')
  }

  function displayPage() {
    switch (state) {
      case 'set-up':
        return <SetUpPage allocateRooms={onAllocateRooms} />
      case 'allocated':
        console.log(allocations)
        return (
          <div>
            {allocations.map(person => {
              return <p>{person.name} {'->'} {person.room}</p>
            })}
          </div>
        )
    }
  }

  return (
    <div className="App">
      {displayPage()}
    </div>
  );
}

export default App;
