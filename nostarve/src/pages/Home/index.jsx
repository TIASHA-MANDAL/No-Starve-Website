import styles from "./styles.module.css";
import React from "react";
import Navbarregister from 'C:/hackathon/zerohunger/nostarve/src/pages/navbarregister.js';
import Footer2 from 'C:/hackathon/zerohunger/nostarve/src/pages/footer2';
import Footer1 from 'C:/hackathon/zerohunger/nostarve/src/pages/footer1';
import Footer3 from 'C:/hackathon/zerohunger/nostarve/src/pages/footer3';
import Fund from 'C:/hackathon/zerohunger/nostarve/src/pages/fund';
import Header from 'C:/hackathon/zerohunger/nostarve/src/pages/header';
import Booking from 'C:/hackathon/zerohunger/nostarve/src/pages/booking';


function Home(userDetails) {
    const user = userDetails.user;
    const logout = () => {
        window.open(`http://localhost:8080/auth/logout`, "_self");
    };
    return (
        <div className={styles.container1001}>
            <div className="hh1">
                <div className="hh3"> <Navbarregister username={user.name} pic={user.picture} /></div>
                
                <div className="hh3">   <Header /></div>
                <div className="hh3">  <Booking /></div>
                <div className="hh3">   <Fund /></div>
                <div className="hh3">   <Footer1 /></div>
                <div className="hh3">   <Footer2 /></div>
                <div className="hh3">  <Footer3 /></div>
            </div>
           
        </div>
			
	);
}

export default Home;