import React from "react";
import { Button, Modal, InputGroup, Form, ModalHeader } from "react-bootstrap";
// import { ref, set, get, update, remove, child } from "firebase/database";
import StartFirebase from "./firebaseconfig";
import axios from "axios";
import Popup from 'reactjs-popup';
import Col from 'react-bootstrap/Col';
import { Navigate } from "react-router-dom";


//occasionally
const db = StartFirebase();
export class CrudPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: '',
            isOpen: false,
            record: {
                //    username: props.username,
                Name: props.record.Name,
                PhoneNumber: props.record.PhoneNumber,
                location: props.record.location,
                Time1: props.record.Time1,
                Date1: props.record.Date1
            },
            // modUsername: '',
            // modName: '',
            // modPhoneNumber: '',
            // modlocation: '',
            // modTime1: '',
            // modDate1: ''
        }
    }
    componentDidMount() {
        console.log(this.state.record);
        // axios.post('https://sheet.best/api/sheets/282f9da3-8bdc-49da-8821-8aeed9d31c8d',this.state.record).then((Response=>{
        //     console.log(Response);

        // }))
    }
    handle() {
        // axios.post('https://sheet.best/api/sheets/282f9da3-8bdc-49da-8821-8aeed9d31c8d', this.state.record).then((Response => {
        //     console.log(Response);
        // }))
        axios.post('https://sheet.best/api/sheets/830be908-576b-4993-93d6-b7aa46e99608', this.state.record).then((Response => {
            console.log(Response);
        }))
    }
    // openModal(option) {
    //     if (option == 'add') {
    //         this.setState({
    //             isOpen: true,
    //             mode: option,
    //             modUsername: '',
    //             modName: '',
    //             modPhoneNumber: '',
    //             modlocation: '',
    //             modTime1: '',
    //             modDate1: ''
    //         })
    //     }
    //     else if (option == 'edit') {
    //         let rec = this.state.record;
    //         this.setState({
    //             isOpen: true,
    //             mode: option,
    //             modUsername: '',
    //             modName: '',
    //             modPhoneNumber: '',
    //             modlocation: '',
    //             modTime1: '',
    //             modDate1: rec.Date1
    //         })
    //     }
    // }
    // closeModal() {
    //     this.setState({
    //         isOpen: false
    //     })
    // }
    render() {
        return (
            <>
                {/* <Button variant="primary" className="ms-2" onClick={() => { this.handle() }} > Assign</Button> */}
                <div className="wewe">
                    <Popup className='pop11' trigger={<Button variant="success" className='btnss' >Assign</Button>} position="bottom center left" >
                    <div className='po22'><form form method="POST">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Assign agent</Form.Label>
                            <div classname="Optionoo"> <Form.Select defaultValue="Choose"  >
                                <option value="">Name</option>
                                <option value="virtually">Debojit Das Gupta</option>
                                <option value="offline">Raja Paul</option>
                                <option value="virtually">Parthib Das</option>
                                <option value="offline">Soumen Roy</option>
                            </Form.Select></div>
                            <div className="iii"> <Button variant="success" onClick={() => { this.handle() }} >submit</Button>
                                {/* <Navigate to="/occasional" state={{ todos: []}} replace={true} /> */}
                            </div>
                            <div className="iii3"> 
                            <Button variant="danger" href="/occasional" >Close</Button>
                                {/* <Navigate to="/occasional" state={{ todos: []}} replace={true} /> */}
                            </div>
                        </Form.Group>
                    </form>
                    </div>
                </Popup>
                </div>
                {/*<Button variant="primary" className="ms-2" onClick={this.openModal('edit')}> Assign</Button>
                <Modal show={this.state.isOpen}>
                    <Modal.Header>
                        <Modal.Title>{(this.state.mode == 'add') ? 'Add New Record' : 'Edit Record'}</Modal.Title>
                        <Button size="sm" variant="dark" onClick={() => { this.closeModal() }}>X</Button>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup>
                            <InputGroup.Text>Username</InputGroup.Text>
                            <Form.Control
                                value={this.state.modUsername}
                                onChange={e => { this.setState({ modUsername: e.target.value }) }}
                                disabled={(this.state.mode != 'add')}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Text>Name</InputGroup.Text>
                            <Form.Control
                                value={this.state.modName}
                                onChange={e => { this.setState({ modName: e.target.value }) }}
                                disabled={(this.state.mode != 'add')}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Text>Phone Number</InputGroup.Text>
                            <Form.Control
                                value={this.state.modPhoneNumber}
                                onChange={e => { this.setState({ modPhoneNumber: e.target.value }) }}
                                disabled={(this.state.mode != 'add')}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Text>Location</InputGroup.Text>
                            <Form.Control
                                value={this.state.modlocation}
                                onChange={e => { this.setState({ modlocation: e.target.value }) }}
                                disabled={(this.state.mode != 'add')}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Text>Time</InputGroup.Text>
                            <Form.Control
                                value={this.state.modTime1}
                                onChange={e => { this.setState({ modTime1: e.target.value }) }}
                                disabled={(this.state.mode != 'add')}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Text>Date</InputGroup.Text>
                            <Form.Control
                                type='date'
                                value={this.state.modDate1}
                                onChange={e => { this.setState({ modDate1: e.target.value }) }}
                                disabled={(this.state.mode != 'add')}
                            />
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" className="ms-2"> Assign</Button>
                    </Modal.Footer>
                </Modal> */}
            </>
        )
    }


}
