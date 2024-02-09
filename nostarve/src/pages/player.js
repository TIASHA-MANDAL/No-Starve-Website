import React, { useRef } from "react";
import './player.css'

import {
    MDBBtn,
    MDBCard,
    MDBContainer,
    MDBCol,
    MDBIcon,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink,
    MDBRipple,
    MDBRow,
} from "mdb-react-ui-kit";
import Navvv from "./navvv";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Player = () => {
    const videoRef = useRef();

    const handlePlay = () => {
        videoRef.current.play();
    };
    const handlePause = () => {
        videoRef.current.pause();
    };
    React.useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="ccc">
            <div className="ayushy"> <Navvv /></div>
            <div className="ddd1">
                <MDBContainer className="py-590" data-aos="fade-up-left">
                    <MDBCard className="px-3 pt-33" style={{ maxWidth: "33rem" }}>
                        <div className="qqq">
                            <MDBRipple
                                className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                                rippleTag="div"
                                rippleColor="light"
                            >
                                <img
                                    src="https://aurumpharmalab.com/wp-content/uploads/2019/12/about-us.png"
                                    className="img-fluid"
                                />
                                
                            </MDBRipple>
                            {/* <MDBRow className="mb-3">
                                <MDBCol col="6">
                                    <a href="" className="text-info">
                                        <MDBIcon fas icon="plane" className="me-1" />
                                        Travels
                                    </a>
                                </MDBCol>
                                <MDBCol col="6" className="text-end">
                                    <u> 15.07.2020</u>
                                </MDBCol>
                            </MDBRow> */}
                            <a href="#!" className="text-dark">
                                <h5></h5>
                                <p>
                                We are providing  an open platform for different restaurants, individuals to cooperate by distributing the excess food to the poor and needy people.
                                </p>
                            </a>
                            <hr />
                        
                        </div>
                    </MDBCard>
                </MDBContainer>
                <MDBContainer className="py-5909" data-aos="fade-up-right">
                    <MDBCard className="px-3 pt-33" style={{ maxWidth: "32rem" }}>
                        <div className="qqq">
                            <MDBRipple
                                className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                                rippleTag="div"
                                rippleColor="light"
                            >
                                <img
                                    src="data:image/jpeg;base64,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"
                                    className="img-fluid"
                                />
                                 
                            </MDBRipple>
                            {/*<MDBRow className="mb-3">
                                <MDBCol col="6">
                                    <a href="" className="text-info">
                                        <MDBIcon fas icon="plane" className="me-1" />
                                        Travels
                                    </a>
                                </MDBCol>
                                <MDBCol col="6" className="text-end">
                                    <u> 15.07.2020</u>
                                </MDBCol>
                            </MDBRow> */}
                            <a href="#!" className="text-dark">
                                <h5></h5>
                                <p>
                                As per statistics, major amounts of food is wasted and sent to landfills and major waste comes from households, restaurants etc. Our main motto is to reduce the food waste and stop people sleeping with hunger<br></br>
                                </p>
                            </a>
                            <hr />
                        
                        </div>
                    </MDBCard>
                </MDBContainer>
                {/* <MDBRow className="gx-5 border-bottom pb-4 mb-590" data-aos="fade-left">
                    <MDBCol md="6" className="mb-46777">
                        <MDBRipple
                            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                            rippleTag="div"
                            rippleColor="light"
                        >
                            <div className="grid-btn">

                            </div>
                            <video width="520" height="300" ref={videoRef}>
                                <source src="/Videos/results.mp4" />
                            </video>
                            <button className="btn" onClick={handlePlay}>
                                Play
                            </button>
                            <button className="btn-pause" onClick={handlePause}>
                                Pause
                            </button>

                        </MDBRipple>
                    </MDBCol>
                    <MDBCol md="6" className="mb-4678">
                        <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                            News of the day
                        </span>
                        <h4>
                            <strong>FEEDBACK FROM JAMINI HOTEL</strong>
                        </h4>
                        <p className="text-muted">
                            The scale of the current global hunger and malnutrition crisis is enormous, with an expected 345.2 million people projected to be food insecure – more than double the number in 2020.
                            An expected 345.2 million people projected to be food insecure in 2023
                            more than double the number in 2020. This constitutes a staggering rise of 200 million people compared to pre-COVID-19 pandemic levels.
                            More than 900,000 people worldwide are fighting to survive in famine-like conditions.
                            This is ten times more than five years ago, an alarmingly rapid increase.
                            An immediate response is needed. The global community must not fail on its promise to end hunger and malnutrition by 2030.


                        </p>

                    </MDBCol>
                </MDBRow> */}
                <MDBContainer className="py-59066" data-aos="fade-up-left">
                    <MDBCard className="px-3 pt-33" style={{ maxWidth: "38rem" }}>
                        <div className="qqq">
                            <MDBRipple
                                className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                                rippleTag="div"
                                rippleColor="light"
                            >
                                 <video width="600" height="590" controls>
                                <source src="/Videos/results.mp4" />
                            </video>
                            
                                
                            </MDBRipple>
                            <MDBRow className="mb-3">
                                <MDBCol col="6">
                                    <a href="" className="text-info">
                                        <MDBIcon fas icon="plane" className="me-1" />
                                        FEEDBACK
                                    </a>
                                </MDBCol>
                               
                            </MDBRow>
                            <a href="#!" className="text-dark">
                                <h5></h5>
                                <p>
                                    Here is some of the customer review
                                </p>
                            </a>
                            <hr />
                        
                        </div>
                    </MDBCard>
                </MDBContainer>
            </div>
        </div>
    );
};

export default Player;