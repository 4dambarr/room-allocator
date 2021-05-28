import React, { useState } from 'react'
import { connect } from "react-redux"
import styled from 'styled-components'
import "./App.css"
import AllocateRooms from './Scripts/AllocateRooms';
import { AddPersonModal } from './UIComponents/AddPersonModal';

const PageHolder = styled.div`
  padding: 2em;
  width:100vw;
  height: 100vh;
`;

const TablesHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
`;

const ResultsHolder = styled.div`
  min-height: 50px;
  margin-top: 2em;
`;

const Table = styled.table`
  margin: 1em;
  border: 1px solid black;
`;

const Row = styled.tr`
  border: 1px solid black;
`;




const App = ({ people, rooms, handleRemoveRoom, handleAddRoom }) => {
  const [showAddPersonModal, setShowAddPersonModal] = useState(false)
  const [allocatedRooms, setAllocatedRooms] = useState([])
  const [forceUpdate, setForceUpdate] = useState(false)

  const addRoom = () => {
    let name = document.getElementById("new-room-name").value
    var nameExists = false
    for (let room of rooms) {
      if (room.name === name) {
        nameExists = true
      }
    }
    if (name.length < 1 || name.length > 19 && !nameExists) {
      alert("Room names can only be 1 - 19 characters long")
    } else if (nameExists) {
      alert("Name already exists")
    } else {
      handleAddRoom(name)
    }
  }

  const removeRoom = (id) => {
    handleRemoveRoom(id)
  }

  const allocateRooms = () => {
    let res = AllocateRooms(people);
    setAllocatedRooms(res)
    setForceUpdate(!forceUpdate)
  }

  return (
    <PageHolder>
      <AddPersonModal show={showAddPersonModal} setShow={setShowAddPersonModal} />
      <h1>Room Allocator</h1>
      <p>Allocate rooms in your house in the fairest way possible</p>
      <TablesHolder>
        <Table>
          <thead>
            <Row>
              <th>Rooms</th>
            </Row>
          </thead>
          <tbody>
            {rooms.map(room => (
              <Row>
                <td style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  <p style={{ margin: "0.5em", display: "inline" }}>{room.name}</p>
                  <div style={{ position: 'absolute', right: "5px" }}>
                    <button>Edit</button>
                    <button onClick={() => removeRoom(room.id)} style={{ margin: "0.5em" }}>Remove</button>
                  </div>

                </td>
              </Row>
            ))}
            <Row>
              <td>
                <input type="text" id="new-room-name" placeholder="Type here" style={{ margin: "0.5em" }} />
                <button onClick={addRoom}>Add Room</button>
              </td>
            </Row>
          </tbody>
        </Table>

        <Table>
          <thead>
            <Row>
              <th>People</th>
            </Row>
          </thead>
          <tbody>
            {people.map(person => (
              <Row>
                <td>
                  {person.name}
                  <br />
                  Preferences:
                  {" " + person.preferences.map(choice => (choice.name))}
                </td>
              </Row>
            ))}
            <Row>
              <td>
                <button style={{ margin: "0.5em" }} onClick={() => setShowAddPersonModal(true)}>Add Person</button>
              </td>
            </Row>
          </tbody>
        </Table>
      </TablesHolder>
      <button onClick={allocateRooms}>Allocate Rooms</button>
      <ResultsHolder>
        {allocatedRooms.length > 0 ? <h1>Results</h1> : null}
        {allocatedRooms.map(result => (
          <p>{result.name} is in {result.room}</p>
        ))}
      </ResultsHolder>
    </PageHolder >
  )
}

const mapStateToProps = state => {
  return {
    people: state.people,
    rooms: state.rooms
  };
};
const mapDisapatchToProps = dispatch => {
  return {
    handleAddRoom: (name) => dispatch({ type: 'ADD_ROOM', name: name }),
    handleRemoveRoom: (id) => dispatch({ type: 'REMOVE_ROOM', id: id })
  };
};
export const Container = connect(mapStateToProps, mapDisapatchToProps)(App)