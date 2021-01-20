import { useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import AddPersonModal from './AddPersonModal';
import AddRoomModal from './AddRoomModal';
import './App.css';
import CheckAllocteModal from './CheckAllocateModal';
import EditPersonModal from './EditPersonModal';

function SetUpPage(props) {
	const [rooms, setRooms] = useState([])
	const [people, setPeople] = useState([])
	const [showAddRoom, setShowAddRoom] = useState(false)
	const [showAddPeople, setShowAddPeople] = useState(false)
	const [showEditPerson, setShowEditPerson] = useState(false)
	const [personToEdit, setPersonToEdit] = useState(null)
	const [roomsToEdit, setRoomsToEdit] = useState([])
	const [checkAllocate, setCheckAllocate] = useState(false)
	const [checkText, setCheckText] = useState('are you sure')

	function addRoom(name) {
		var newRooms = rooms;
		newRooms.push(name)
		setRooms(newRooms)
		for (let person of people) {
			var holder = person.rooms
			if (holder.length !== newRooms.length) {
				holder.push(name)
				person.rooms = holder
			}
		}
	}

	function onAddRoom() {
		setShowAddRoom(true)
	}

	function addPerson(name, rankings) {
		let person = {
			name: name,
			rooms: rankings
		}
		var holder = people;
		people.push(person);
		setPeople(holder)
	}

	function onAddPeople() {
		if (rooms.length < 2) {
			alert("Not enough rooms added")
		} else {
			setShowAddPeople(true)
		}
	}

	function updatePerson(oldName, newName, newRooms) {
		var newPeople = people;
		for (let person of newPeople) {
			if (person.name === oldName) {
				person.name = newName;
				person.rooms = newRooms
			}
		}
		setPeople(newPeople)
	}

	// Setting it to value on name is a bit of a bodge but for this task it gets the job done
	function onEditPerson(e) {
		var name = e.target.name
		var rankings = e.target.value.split(",")
		setPersonToEdit(name)
		setRoomsToEdit(rankings)
		setShowEditPerson(true)
	}

	function onAllocateRooms() {
		if (rooms.length < 2){
			alert('Not enough rooms')
		} else if (people.length < 2) {
			alert('Not enough people')
		} else if (rooms.length > people.length) {
			setCheckText("More rooms than people, are you sure you want to allocate rooms?")
			setCheckAllocate(true)
		} else if (people.length > rooms.length) {
			setCheckText("More people than rooms, are you sure you want to allocate rooms?")
			setCheckAllocate(true)
		} else {
			props.allocateRooms(people)
		}
	}

	function allocateRooms(){
		props.allocateRooms(people)
	}

	function displayRooms() {
		if (rooms.length === 0) {
			return <tr><td><i>No Rooms Added</i></td></tr>
		} else {
			return (
				rooms.map(room => {
					return <tr><td>{room}</td></tr>
				})
			)
		}
	}

	function displayPeople() {
		if (people.length === 0) {
			return <tr><td><i>Nobody Added</i></td></tr>
		} else {
			return (
				people.map(person => {
					return (
						<tr>
							<td>{person.name}</td>
							<td>{person.rooms.toString()} <Button className="Edit-Button" name={person.name} value={person.rooms.toString()} onClick={onEditPerson}>Edit</Button></td>
						</tr>)
				})
			)
		}
	}

	return (
		<div className="App">
			<AddRoomModal
				show={showAddRoom}
				setShow={setShowAddRoom}
				addRoom={addRoom}
			/>
			<AddPersonModal
				show={showAddPeople}
				rooms={rooms}
				setShow={setShowAddPeople}
				addPerson={addPerson}
			/>
			<EditPersonModal
				show={showEditPerson}
				rooms={roomsToEdit}
				name={personToEdit}
				setShow={setShowEditPerson}
				updatePerson={updatePerson}
			/>
			<CheckAllocteModal
				show={checkAllocate}
				checkText={checkText}
				setShow={setCheckAllocate}
				allocateRooms={allocateRooms}
			/>
      <Container>
			<Row>
				<div className="Title">
					<h1>Room Allocator</h1>
					<p>Allocate rooms in your house in the fairest way possible</p>
				</div>
			</Row>
			<Row className="Body">
				<Col className="Button-Holder">
					<button className="Add-Button" onClick={onAddRoom}>Add Room</button>
					<button className="Add-Button" onClick={onAddPeople}>Add Person</button>
				</Col>
				<Col>
					<Table className="Table" striped bordered hover>
						<thead>
							<tr>
								<td>Rooms</td>
							</tr>
						</thead>
						<tbody>
							{displayRooms()}
						</tbody>
					</Table>
				</Col>
			</Row>
			<Row>
				<Table className="Table" striped bordered hover>
					<thead>
						<tr>
							<td>Person</td>
							<td>Rankings</td>
						</tr>
					</thead>
					<tbody>
						{displayPeople()}
					</tbody>
				</Table>
			</Row>
			<Row className="Submit-Button-Holder">
				<button className="Add-Button" onClick={onAllocateRooms}>Allocate Rooms</button>
			</Row>
      </Container>
    </div >
  );
}

export default SetUpPage;
