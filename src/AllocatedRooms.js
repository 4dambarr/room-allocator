import { Button, Container, Row, Table } from 'react-bootstrap';

function AllocatedRooms(props) {
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
                                {props.allocations.map(person => {
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
            <Row>
                <div className="Buttons-Holder">
                    <button onClick={() => props.reallocateRooms(props.choices)}>Re-Allocate Rooms</button>
                    <button onClick={() => props.setState('set-up')}>Allocate More Rooms</button>
                </div>
            </Row>
            <br></br>
        </Container>
    )
}

export default AllocatedRooms