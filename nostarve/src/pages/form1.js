import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Popup from 'reactjs-popup';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./form1.css";
import { Modal } from 'react-responsive-modal';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
} from "mdb-react-ui-kit";
import Navvv from "./navvv";
import { useNavigate } from 'react-router-dom';

export default function Form1(props) {
    const [ayush, setAyush] = React.useState("C1");
    const [ayush1, setAyyush] = React.useState("C2");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    // console.log(watch('username'));
    React.useEffect(() => {
        console.log(props.user);
    })
    function hidee(e) {
        let namee = e.target.name;
        let u = e.target.value;
        console.log(u);
        setUserData(() => { return { ...userData, [namee]: u } });
        if (u === "offline") {
            console.log("C2");
            setAyyush("C2");
        }
        else {
            console.log("C1");
            setAyush("C1");
        }
    }
    const [userData, setUserData] = useState({
        Name: "",
        PhoneNumber: "",
        location: "",
        Date1: "",
        Time1: "",
        Option: ""
    });

    let date, value;
    const postUserData = (event) => {
        // date = event.target.date;
        date = event.target.name;
        value = event.target.value;
        console.log("name " + date);
        setUserData(() => { return { ...userData, [date]: value } });
    };
    const Navigate = useNavigate();
    const submitData = async (event) => {
        event.preventDefault();
        const { Name,
            PhoneNumber,
            location,
            Date1,
            Time1, Option } = userData;
        console.log(userData);
        if (Name && PhoneNumber && location && Date1 && Time1) {
            const res = fetch("https://service-e43c3-default-rtdb.firebaseio.com/Occasionally.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Name,
                    PhoneNumber,
                    location,
                    Date1,
                    Time1

                }),
            });
            if (res) {
                setUserData({
                    Name,
                    PhoneNumber,
                    location,
                    Date1,
                    Time1,
                    Option
                });

                Navigate("/Home")
            }
            else {
                alert("Plz fill the data");
            }
        } else {
            alert("Plz fill the data");
        }
    };
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const [state, setState] = useState({
        card: "",
        card1: "",
        card2: "",
        card3: "",
        card4: "",
        card5: "",
    });

    const { card, card1, card2, card3, card4, card5 } = state;

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };


    return (
        <div className="iiiv1">
            <div className="ssu">    <Navvv /></div>

            <div className="iiiv44">

                <section className=" sec12" >
                    <div className="register12">
                        <div className="col-1110">
                            <div className="e">
                                <h2 className="ccc1">PROVIDE FOOD OCCASIONALLY</h2>
                                <span>Fill up the form to get the service</span>
                            </div>
                            <form
                                id="form"
                                className="flex flex-col1110"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <input type="text" name="Name" {...register("Name")} placeholder="Name" value={userData.Name}
                                    onChange={postUserData} />
                                <input
                                    name="PhoneNumber"
                                    type="text"
                                    {...register("PhoneNumber")}
                                    placeholder="Phone Number"
                                    value={userData.PhoneNumber}
                                    onChange={postUserData}
                                />
                                <input
                                    type="text"
                                    name="location"
                                    {...register("location", { required: true, maxLength: 10 })}
                                    placeholder="location"
                                    value={userData.location}
                                    onChange={postUserData}
                                />
                                {/* <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Service</Form.Label>
                <Form.Select defaultValue="Choose" name="Option" {...register("Option")} onChange={hidee}>
                  <option value="">Option</option>
                  <option value="virtually">Virtually</option>
                  <option value="offline">Offline</option>
                </Form.Select>
              </Form.Group> */}
                                <Form.Label className="ccc1">Pick your date</Form.Label>
                                <input
                                    name="Date1"
                                    type="date"
                                    {...register("Date1")}
                                    value={userData.Date1}
                                    onChange={postUserData}
                                />
                                {/* <DatePicker
                    name="Date1"
                    {...register("Date1")}
                    value={userData.Date1}
                    onChange={postUserData}
                   placeholderText="MM/DD/YYYY"
                  selectsStart */}
                                {/* // startDate={startDate}
                  // excludeDates={datesBlock.map((ele)=>{return(new Date(ele))})}
                  // endDate={endDate}
                  // minDate={startDate2}
                // /> */}
                                <Form.Label className="ccc1">Time</Form.Label>
                                <input
                                    name="Time1"
                                    type="time"
                                    {...register("Time1")}
                                    value={userData.Time1}
                                    onChange={postUserData}
                                />
                                <button className="bb10" onClick={submitData}>Donate Now</button>

                            </form>
                        </div>

                    </div>
                </section>
                {/* <div >
                    <img className="col-imgg" src="https://files.globalgiving.org/pfil/5067/ph_5067_93067.jpg?m=1479657926000" alt="" />
                </div> */}
            </div>
        </div>
    );
}