import StartFirebase from "./firebaseconfig";
import React from "react";
import { ref, onValue } from 'firebase/database';
import { Table } from 'react-bootstrap';
import './occasional.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Popup from 'reactjs-popup';
import { useState } from "react";
import { CrudPanel2 } from "./crudpanel2";
import Navbarrecords from './nabarrecords';

const db = StartFirebase();
let UniqueNumber2 = 0;

export class Daily extends React.Component {
    constructor() {

        super();

        this.state = { tableData: [] }
    }

    componentDidMount() {
        const dbRef = ref(db, 'Daily');

        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData: records });
        });
    }
    // handle(){
    //     const[state,setState]=useState({
    //       Name:""  
    //     })
    // }
    // constructor( Name) = state;
    // handleInputChange = (e) => {
    //     let { name, value } = e.target;
    //     setState({ ...state, [name]: value });
    //   };
    iii3(){
        window.open('https://docs.google.com/spreadsheets/d/1rl2oWkFSdP_LXyjP8phhYAWjjdZcbOwxu8v4dZjqEk0/edit?usp=sharing','_blank')
     }
    render() {
        return (
            <div className="kkk1">
                 <div className='tttt'> <Navbarrecords /></div>
                <div className="ser"><u>Daily Service </u><button className="mumu" onClick={() => { this.iii3() }}><u>Agents record</u></button> </div>
                <Table striped bordered hover variant="" >
                    <thead>
                        <tr>
                            <th>No</th>

                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Location</th>
                            <th>Time For Pick Up</th>
                            {/* <th>Date For Pick Up</th> */}
                            <th>Assign Agent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((row, index) => {
                            return (
                                <tr key={UniqueNumber2++}>
                                    <td>{index + 1}</td>
                                    {/* <td>{row.key}</td> */}
                                    <td >{row.data.Name}
                                    </td>
                                    <td>{row.data.PhoneNumber}</td>
                                    <td>{row.data.location}</td>
                                    <td>{row.data.Time1}</td>
                                    {/* <td>{row.data.Date1}</td> */}
                                    <td>
                                        {/* <Popup className='pop11' trigger={<Button variant="success" className='btnss' >Assign</Button>} position="bottom center left" >
                                            <div className='po22'><form form method="POST">
                                                <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Label>Assign agent</Form.Label>
                                                    <div classname="Optionoo"> <Form.Select defaultValue="Choose"  >
                                                        <option value="">Name</option>
                                                        <option value="virtually">Parthib Das</option>
                                                        <option value="offline">Raja Paul</option>
                                                        <option value="offline">Soumen Roy</option>
                                                    </Form.Select></div>
                                                    <div className="iii"> <Button variant="success" href="/occasional">submit</Button></div>
                                                </Form.Group>
                                            </form>
                                            </div>
                                        </Popup> */}
                                        <CrudPanel2 username={row.key} record={row.data} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}