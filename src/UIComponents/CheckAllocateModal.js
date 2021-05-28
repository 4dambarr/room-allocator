const { Modal, Button } = require("react-bootstrap");

function CheckAllocteModal(props){
    function close(){
        props.setShow(false)
    }

    function onAllocateRooms(){
        props.allocateRooms()
    }

    return (
        <Modal show={props.show} onHide={close}>
            <Modal.Header closeButton>
                Allocate Rooms
			</Modal.Header>
            <Modal.Body>
                {props.checkText}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={close}>Cancel</Button>
                <Button variant="success" onClick={onAllocateRooms}>Allocate Rooms</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CheckAllocteModal