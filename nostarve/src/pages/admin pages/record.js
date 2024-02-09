import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./record.css";
import Navbarrecords from './nabarrecords';
import { useNavigate } from 'react-router-dom';

function Record() {
  const Navigate = useNavigate();
  function cff1() {
    // window.open('https://console.firebase.google.com/u/0/project/nostarveservices/database/nostarveservices-default-rtdb/data','_blank')
    Navigate("/occasional")
  }
  function cff2() {
    // window.open('https://console.firebase.google.com/u/0/project/nostarveservices2/database/nostarveservices2-default-rtdb/data','_blank')
     Navigate("/daily")
  }
  function cff3() {
    // window.open('https://console.firebase.google.com/u/0/project/nostarveservices3/database/nostarveservices3-default-rtdb/data','_blank')
    Navigate("/monthly")
  }
  function cff4() {
    window.open('https://console.firebase.google.com/u/0/project/feedbackuser-3d7b5/database/feedbackuser-3d7b5-default-rtdb/data','_blank')
  }
  function cff5() {
    window.open('https://docs.google.com/spreadsheets/d/1hh1G_nmj5zrg3MxscwXjZuljrwWXvxiJtVFSLRrRIZE/edit?usp=sharing','_blank')
  }
  return (
    <div > 
    <div className='tttt'> <Navbarrecords /></div>
      <div className='rec'>

        <Card style={{ width: '22rem' }} className='oioi'>
          <Card.Img variant="top" src="https://www.potential.com/wp-content/uploads/2019/08/blog-1.jpg" />
          <Card.Body>
            <Card.Title>Customer Record</Card.Title>
            <Card.Text>
              Occasional Pick up service 
            </Card.Text>
            <Button variant="primary" className='buuu' onClick={cff1}>Click</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }} className='oioi'>
          <Card.Img variant="top" src="https://5.imimg.com/data5/FE/YN/GLADMIN-14267262/datamates-250x250.jpg" />
          <Card.Body>
            <Card.Title>Customer Record</Card.Title>
            <Card.Text>
            Daily Pick up service 
            </Card.Text>
            <Button variant="primary" className='buuu' onClick={cff2}>Click</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }} className='oioi'>
          <Card.Img variant="top" src="https://media.istockphoto.com/id/1400467161/photo/multiple-database-is-placed-on-relational-database-tables-with-server-room-and-datacenter.webp?b=1&s=170667a&w=0&k=20&c=-oiSsfVdsAeRxiWO-ZLh0vC46ryUdztV0ptG_bndFsY=" />
          <Card.Body>
            <Card.Title>Customer Record</Card.Title>
            <Card.Text>
            Monthly Pick up service 
            </Card.Text>
            <Button variant="primary" className='buuu' onClick={cff3}>Click</Button>
          </Card.Body>
        </Card>
        </div>
        <div className='rec1'>
        <Card style={{ width: '22rem' }} className='oioi'>
          <Card.Img variant="top" src="https://www.hrmforce.com/wp-content/uploads/2015/12/Feedbackimage-scaled.jpg" />
          <Card.Body>
            <Card.Title>Feedback</Card.Title>
            <Card.Text>
              Customer Feedback
            </Card.Text>
            <Button variant="primary" className='buuu' onClick={cff4}>Click</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }} className='oioi'>
          <Card.Img variant="top" src="https://www.questionpro.com/blog/wp-content/uploads/2018/09/employee-feedback-min.jpg" />
          <Card.Body>
            <Card.Title>Feedback</Card.Title>
            <Card.Text>
              Agents Feedback
            </Card.Text>
            <Button variant="primary" className='buuu' onClick={cff5}>Click</Button>
          </Card.Body>
        </Card>

      </div>
    </div>
  );
}

export default Record;