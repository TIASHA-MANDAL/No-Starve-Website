import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cards.css'
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Cardss() {
  const Navigate = useNavigate();
  function cf1() {
    // window.open('https://console.firebase.google.com/u/0/project/no-starve/database/no-starve-default-rtdb/data','_blank')
    // window.location.href = 'https://console.firebase.google.com/u/0/project/no-starve/database/no-starve-default-rtdb/data';
    Navigate("/record")
  }
  function cf2() {
    window.open('https://1drv.ms/x/s!AkS-nemUdD0-j2YPaknsnW2PE7x_?e=gnVy0F','_blank')
  }
  function cf3() {
    //window.open('https://www.google.co.in/maps/@22.6507718,88.4423709,13.53z?hl=en&authuser=0','_blank')
     Navigate("/tracking")
  }
  function cf4() {
    window.open('https://docs.google.com/spreadsheets/d/1rl2oWkFSdP_LXyjP8phhYAWjjdZcbOwxu8v4dZjqEk0/edit?usp=sharing','_blank')
  }
  
  // return (
  //   <Card className="text-center">
  //     <Card.Header>Dashboard</Card.Header>
  //     <Card.Body>
  //       <Card.Title>Data Base</Card.Title>
  //       <Card.Text>
  //         Click here to visit Data Base
  //       </Card.Text>
  //      <div className='bu'> <Button onClick={cf1} variant="primary">Click</Button></div>
  //     </Card.Body>
  //     <Card.Footer className="text-muted"></Card.Footer>
  //     <Card.Header></Card.Header>
  //     <Card.Body>
  //       <Card.Title>Heat Map</Card.Title>
  //       <Card.Text>
  //         Go to Heat Map
  //       </Card.Text>
  //       <div className='bu' onClick={cf2}> <Button variant="primary">Click</Button></div>
  //     </Card.Body>
  //     <Card.Footer className="text-muted"></Card.Footer>
  //   </Card>

  // );

  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <div className='r1'>
          <Card className='c1'>
            <Card.Img variant="top" src="https://www.nicepng.com/png/detail/256-2565989_customer-database-customer-database-png.png" />
            <Card.Body>
              <Card.Title>Customer Records</Card.Title>
              <Card.Text>
                Data Base of customer
              </Card.Text>
              <div className='bu1' onClick={cf1}> <Button variant="primary">Click</Button></div>
            </Card.Body>
          </Card>
          <Card className='c1'>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJAAkKWpAjFq5rNiEz6ydechTcXb46v0BsPA&usqp=CAU" />
            <Card.Body>
              <Card.Title>Heat Map</Card.Title>
              <Card.Text>
               Visit the sensitive Zones
              </Card.Text>
              <div className='bu1' onClick={cf2}> <Button variant="primary">Click</Button></div>
            </Card.Body>
          </Card>
        </div>
        <div className='r2'>
        <Card className='c1'>
          <Card.Img variant="top" src="https://res.cloudinary.com/madimages/image/fetch/fl_progressive,e_sharpen:100/https://www.mobileappdaily.com/public/uploads/mad_876568b5d2.png" />
          <Card.Body>
            <Card.Title>Loction Tracking</Card.Title>
            <Card.Text>
              Track Pickup Agent
            </Card.Text>
            <div className='bu1' onClick={cf3}> <Button variant="primary">Click</Button></div>
          </Card.Body>
        </Card>
        <Card className='c1'>
          <Card.Img variant="top" src="https://img.freepik.com/premium-vector/delivery-man-riding-scooter-map_56104-670.jpg" />
          <Card.Body>
            <Card.Title>Agent's Records</Card.Title>
            <Card.Text>
             Data Base of pick-up agents and delivery agents
            </Card.Text>
            <div className='bu1' onClick={cf4}> <Button variant="primary" >
              Click</Button></div>
          </Card.Body>
        </Card>
      </div>
    </Col>

    </Row >
  );
}



export default Cardss;