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

function Booking() {
  const [input, setInput] = React.useState(true);
  const [form, setForm] = React.useState({
    Name: "",
    Address: "",
    Number: "",
  });
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

  const Navigate = useNavigate();
   function Click1(){
    Navigate("/form1")
   }
   function Click2(){
    Navigate("/form2")
   }
   function Click3(){
    Navigate("/form3")
   }
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
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>PROVIDE FOOD  OCCASIONALLY</Card.Title>
        <Card.Text>
          Serve your excess food to the hungry people. Your excess food can save a life.<br></br><br></br><br></br><br></br><br></br>
          <span style={{ fontWeight: 'bold' }}>Click here to donate your food!</span>
        </Card.Text>
        <div className='click'><Button onClick={Click1} variant="primary">Donate Food</Button></div>
      </Card.Body>
    </Card>
    </div>
    <div className="bok">
    <Card style={{ width: '24rem' }} >
      <Card.Img variant="top" src="https://as2.ftcdn.net/v2/jpg/02/78/16/03/1000_F_278160345_JCtJn4nHYm2FYxxl6LIiNNjyT7biOVLX.jpg" />
      <Card.Body>
        <Card.Title>PROVIDE FOOD ON DAILY BASIS</Card.Title>
        <Card.Text>
          Serve your excess food to the hungry people on daily basis. Your excess food can save a life.<br></br><br></br><br></br><br></br>
          <span style={{ fontWeight: 'bold' }}>Click here to donate your food!</span>
        </Card.Text>
        <div className='click'><Button onClick={Click2} variant="primary">Donate Food</Button></div>
      </Card.Body>
    </Card>
    </div>
    <div className="bok">
    <Card style={{ width: '23rem' }} >
      <Card.Img variant="top" src="https://bsmedia.business-standard.com/_media/bs/img/article/2017-08/25/full/1503608938-598.jpg?im=FeatureCrop,size=(826,465)" />
      <Card.Body>
        <Card.Title>PROVIDE FOOD ON MONTHLY BASIS</Card.Title>
        <Card.Text>
          Serve your excess food to the hungry people on monthly basis. Your excess food can save a life.<br></br><br></br><br></br><br></br>
          <span style={{ fontWeight: 'bold' }}>Click here to donate your food!</span>
        </Card.Text>
        <div className='click' ><Button onClick={Click3} variant="primary">Donate Food</Button></div>
      </Card.Body>
    </Card>
    </div>
  </div>
);
}

export default Booking;