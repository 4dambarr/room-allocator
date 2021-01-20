import { useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
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
          <Container>
            <Row>
              <div className="Title">
                <h1>Results</h1>
              </div>
            </Row>
            <Row>
              <div className='Results-Page'>
                <div className='Results-Holder'>
                  <Table className="Table" striped bordered hover>
                    <thead>
                      <tr>
                        <td>Person</td>
                        <td>Room</td>
                      </tr>
                    </thead>
                    <tbody>
                      {allocations.map(person => {
                        return (
                          <tr>
                            <td>{person.name}</td>
                            <td>{person.room}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                </div>
              </div>
            </Row>
          </Container>
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
