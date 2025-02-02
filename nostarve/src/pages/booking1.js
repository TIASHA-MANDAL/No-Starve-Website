import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './booking.css'
// import Form from './form';
// import Carousel from "react-bootstrap/Carousel";
import emailjs from "emailjs-com";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {
  FormLabel,
  Input,
} from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';

function Booking1() {
  const [input, setInput] = React.useState(true);
  const [form, setForm] = React.useState({
    Name: "",
    Address: "",
    Number: "",
  });
  function alll(){
     alert("Please Log in/Sign up ");
  }
  // const [f1,sf1]=React.useState(0);
  // const [f2,sf2]=React.useState(0);
  // const [f3,sf3]=React.useState(0);
  // function cf1(){
  //   window.location.replace('https://www.google.com')
  // }
  // function cf2(){
  //   sf2(1)
  // }
  // function cf3(){
  //   sf3(1)
  // }
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // function close()
  // {
  //   setApp("toastee")
  // }
  function containsOnlyNumbers(str) {
    return /^[0-9]+$/.test(str);
  }
  function handleChangeForm(event) {
    const { name, value } = event.target;
    setInput(true);
    setForm((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNoteForm(event) {
    console.log(form.Name + ",,," + form.Address);
    event.preventDefault();
    if (
      form.Name === "" ||
      (form.Address === "") ||
      !containsOnlyNumbers(form.Number)
    ) {
      setInput(false);
    } else {
      console.log(event.target);
      emailjs
        .sendForm(
          "service_w9nxahv",
          "template_p63ytpf",
          event.target,
          "9CaZP6pOITX6wmz0k"

        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      onCloseModal();
    }

  }
  const postData = async (e) => {
    e.preventDefault();
    const { Name, Address, Number } = form;
    const res = fetch('https://no-starve-default-rtdb.firebaseio.com/nostarve.json',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Name, Address, Number
        })
      }
    );
    onCloseModal();
    // if (res) {
    //   alert("Data Stored");}
    // else {
    //   alert("Plz fill the data");
    // }
  };
  // const alert = useAlert()
  const Navigate = useNavigate();
  //  function Click1(){
  //   alert.show('Oh look, an alert!')
  //  }
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="d-flex-justify-content-around" data-aos="zoom-in-up"  >
      <Modal
        className="mode"
        open={open}
        onClose={onCloseModal}
        closeOnOverlayClick={false}
        center={true}
      >
        <div className="moddd" >
          <div className="mod-top">
            Fill up the details to donate your excess food{" "}
          </div>
          <form onSubmit={postData}>
            {input === true ? (
              <></>
            ) : (
              <div className="modal-bg">
                * Fill Name and Address fields properly so that we can reach you
              </div>
            )}
            <FormLabel className="home-pad" name="Name">
              Name
            </FormLabel>
            <Input
              placeholder=" Enter Your Name"
              _placeholder={{ opacity: 4, color: "gray.600" }}
              name="Name"
              onChange={handleChangeForm}
              required
            />
            <div className="gap"></div>
            <FormLabel className="home-pad" name="Address">
              Address
            </FormLabel>
            <Input
              placeholder=" Enter Your Address"
              _placeholder={{ opacity: 1, color: "gray.600" }}
              name="Address"
              onChange={handleChangeForm}
              required
            />
            <div className="gap"></div>
            <FormLabel className="home-pad" name="Number">
              Phone Number
            </FormLabel>
            <Input
              placeholder="Enter Your Number"
              _placeholder={{ opacity: 1, color: "gray.600" }}
              name="Number"
              onChange={handleChangeForm}
              required
            />
            <div className="home-pad"></div>
            <Button colorScheme="blackAlpha" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Modal>
      <div className="bok">
        <Card style={{ width: '23rem' }} >
          <Card.Img variant="top" src="https://www.srloveandcare.org/media/k2/items/cache/3a9297ca78720986dccc8a65ce802a33_L.jpg" />
          <Card.Body>
            <Card.Title>PROVIDE FOOD  OCCASIONALLY</Card.Title>
            <Card.Text>
              Serve your excess food to the hungry people. Your excess food can save a life.<br></br><br></br><br></br><br></br><br></br>
              <span style={{ fontWeight: 'bold' }}>Click here to donate your food!</span>
            </Card.Text>
            <div className='click'><Button variant="primary" onClick={alll}>Donate Food</Button></div>
          </Card.Body>
        </Card>
      </div>
      <div className="bok">
        <Card style={{ width: '23rem' }} >
          <Card.Img variant="top" src="https://as2.ftcdn.net/v2/jpg/02/78/16/03/1000_F_278160345_JCtJn4nHYm2FYxxl6LIiNNjyT7biOVLX.jpg" />
          <Card.Body>
            <Card.Title>PROVIDE FOOD ON DAILY BASIS</Card.Title>
            <Card.Text>
              Serve your excess food to the hungry people on daily basis. Your excess food can save a life.<br></br><br></br><br></br><br></br>
              <span style={{ fontWeight: 'bold' }}>Click here to donate your food!</span>
            </Card.Text>
            <div className='click'><Button onClick={alll} variant="primary">Donate Food</Button></div>
          </Card.Body>
        </Card>
      </div>
      <div className="bok">
        <Card style={{ width: '23rem' }} >
          <Card.Img variant="top" src="https://newsonair.com/wp-content/uploads/2023/01/food-security-696x522.jpg" />
          <Card.Body>
            <Card.Title>PROVIDE FOOD ON MONTHLY BASIS</Card.Title>
            <Card.Text>
              Serve your excess food to the hungry people on monthly basis. Your excess food can save a life.<br></br><br></br><br></br><br></br>
              <span style={{ fontWeight: 'bold' }}>Click here to donate your food!</span>
            </Card.Text>
            <div className='click' ><Button onClick={alll} variant="primary">Donate Food</Button></div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Booking1;