import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

function AddRoomModal(props) {
	const [roomName, setRoomName] = useState()

	function close(){
		props.setShow(false)
	}

	function onSubmit() {
		props.addRoom(roomName)
		close()
	}

	function onKeyDown(e){
		if (e.keyCode === 13){
				e.preventDefault()
				onSubmit()
		}
}

	function onRoomNameChange(e) {
		setRoomName(e.target.value);
	}

	return (
		<Modal show={props.show} onHide={close}>
			<Modal.Header closeButton>
				Add Room
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Label>Room Name</Form.Label>
					<Form.Control type="text" onChange={onRoomNameChange} onKeyDown={onKeyDown}></Form.Control>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={close}>Cancel</Button>
				<Button variant="success" onClick={onSubmit}>Submit</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default AddRoomModal