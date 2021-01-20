import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

function AddPersonModal(props) {
    const [name, setName] = useState()
    const [rooms, setRooms] = useState(props.rooms)
    const forceUpdate = useForceUpdate();

    function moveRank(room, newRank, oldRank) {
        var oldRanks = rooms
        var newRanks = oldRanks

        if (newRank > oldRank) {
            newRanks[oldRank] = oldRanks[oldRank + 1]
            for (let i = oldRank; i < newRank; i++) {
                newRanks[i] = oldRanks[i + 1]
            }
            newRanks[newRank] = room
        } else {
            newRanks[oldRank] = oldRanks[oldRanks - 1]
            for (let i = oldRank; i > newRank; i--) {
                newRanks[i] = oldRanks[i - 1]
            }
            newRanks[newRank] = room
        }

        setRooms(newRanks)
        forceUpdate()
    }

    function close() {
        props.setShow(false)
    }

    function onSubmit() {
        props.addPerson(name, rooms)
        close()
    }

    function onKeyDown(e) {
        if (e.keyCode === 13) {
            e.preventDefault()
        }
    }

    function allowDrop(e) {
        e.preventDefault();
    }

    function drag(e) {
        var value = document.getElementById(e.target.id).getAttribute("value")
        e.dataTransfer.setData("Room", value);
        e.dataTransfer.setData("Rank", e.target.id);
    }

    function drop(e) {
        e.preventDefault()
        var room = e.dataTransfer.getData("Room");
        var oldRank = e.dataTransfer.getData("Rank");
        var newRank = e.target.id
        moveRank(room, parseInt(newRank), parseInt(oldRank))
    }

    function onNameChange(e) {
        setName(e.target.value);
    }

    useEffect(() => {
        setRooms(props.rooms)
        setName("")
    }, [props.show])

    function displaySubmit() {
        if(name){
            return <Button variant="success" onClick={onSubmit}>Submit</Button>
        } else {
            return <Button variant="success" disabled>Submit</Button>
        }
    }

    return (
        <Modal show={props.show} onHide={close}>
            <Modal.Header closeButton>
                Add Person
			</Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={onNameChange} onKeyDown={onKeyDown}></Form.Control>
                </Form>
                <div className="Rankings-Holder">
                    <p>Rankings</p>
                    {rooms.map((room, index) => {
                        return (
                            <div className="Ranking-Holder">
                                <div className="Rank-Pos">
                                    <p>{index + 1}.</p>
                                </div>
                                <div id={index} value={room} className="Room" draggable onDrop={drop} onDragOver={allowDrop} onDragStart={drag}>{room}</div>
                            </div>
                        )
                    })}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={close}>Cancel</Button>
                {displaySubmit()}
            </Modal.Footer>
        </Modal>
    )
}

export default AddPersonModal