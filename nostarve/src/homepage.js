import React from "react";
import Navbare from './pages/navbar';
// import Pic from './pages/pic';
// import Booking1 from './pages/booking1';
import Footer2 from './pages/footer2';
import Footer1 from './pages/footer1';
import Footer3 from './pages/footer3';
import Fund from './pages/fund';
import Header from './pages/header';
import Booking from './pages/booking';
import './homepage.css'
import Booking1 from "./pages/booking1";
function Homepage() {
    return (
        <div className="hh1">
          <div className="hh3"> <Navbare /></div> 
          <div className="hh3">   <Header /></div> 
          <div className="hh3">  <Booking /></div> 
          <div className="hh3">   <Fund /></div> 
          <div className="hh3">   <Footer1 /></div> 
          <div className="hh3">   <Footer2 /></div> 
          <div className="hh3">  <Footer3 /></div> 
        </div>
        

    );
}
export default Homepage;