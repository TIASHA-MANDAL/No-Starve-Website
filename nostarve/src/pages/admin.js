import React from "react";
// import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
import Navbarr from "./admin pages/navbarr";
import Cardss from "./admin pages/cards";
import './admin.css'
import Slidenav from "./admin pages/slidenav";

function Admin(){
    return(
        <div className="fl">
        <div className="na"> <Navbarr /></div>
         <div className="ca"><Cardss /></div>
         {/* <div className="si"><Slidenav /></div> */}
         </div>
     );
 }
 export default Admin;

  