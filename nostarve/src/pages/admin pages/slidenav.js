import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import emailjs from "emailjs-com";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {
  FormLabel,
  Input,
} from "@chakra-ui/react";
// import AOS from 'aos';
import 'aos/dist/aos.css';
import './slidenav.css'
import { Textarea } from '@chakra-ui/react'

function Slidenav() {
    const [input, setInput] = React.useState(true);
  const [form, setForm] = React.useState({
    Name: "",
    Details: "",
  });
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
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
    console.log(form.Name + ",,," + form.Details);
    event.preventDefault();
    if (
      form.Name === "" ||
      (form.Details === "") 
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
  // function whatsapp(){
  //   var Details=document.getElementById("Details").value;
  //   var wpurl="https://wa.me/919073593700?text="
  //   + "Details of customer :"+Details;
  // }
      return (
        <div>
            <Modal
      className="mode"
      open={open}
      onClose={onCloseModal}
      closeOnOverlayClick={false}
      center={true}
    >
      <div className="moddd" >
        <div className="mod-top">
          Assign To Pick-up Agent{" "}
        </div>
        <form onSubmit={submitNoteForm}>
          {input === true ? (
            <></>
          ) : (
            <div className="modal-bg">
              * Fill Name and Details fields properly so that we can reach you
            </div>
          )}
          <FormLabel className="home-pad" name="Name">
            Name
          </FormLabel>
          <Input
            placeholder="Name"
            _placeholder={{ opacity: 4, color: "gray.600" }}
            name="Name"
            onChange={handleChangeForm}
            required
          />
          <div className="gap"></div>
          <FormLabel className="home-pad" name="Details">
            Details
          </FormLabel>
          <Textarea type="text" className='place'
            placeholder="Details"
            _placeholder={{ opacity: 1, color: "gray.600" }}
            name="Details"
            onChange={handleChangeForm}
            required
          />
          <div className="gap"></div>
         
          <div className="home-pad"></div>
          <Button colorScheme="blackAlpha" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </Modal>
        <Card className="text-center10 ooo">
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title>Assign Pick-up Agent</Card.Title>
            <Card.Text>
             Send the customer details to the pick-up agent
            </Card.Text>
            <Button variant="primary" onClick={onOpenModal} className='bii'>Send</Button>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
        </div>
      );
    }
    

export default Slidenav;