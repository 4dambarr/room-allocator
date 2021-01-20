const { Modal, Button } = require("react-bootstrap");

function CheckAllocteModal(props){
    function close(){
        props.setShow(false)
    }

    return (
        <Modal show={true} onHide={close}>
            <Modal.Header closeButton>
                Allocate Rooms
			</Modal.Header>
            <Modal.Body>
                {props.checkText}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger">Cancel</Button>
                <Button variant="success">Allocate Rooms</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CheckAllocteModal