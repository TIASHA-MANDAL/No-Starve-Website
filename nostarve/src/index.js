import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Navbare from './pages/navbar';
// // import Pic from './pages/pic';
// // import Booking1 from './pages/booking1';
// import Footer2 from './pages/footer2';
// import Footer1 from './pages/footer1';
// import Footer3 from './pages/footer3';
// import Fund from './pages/fund';
// import Header from './pages/header';
// import Booking from './pages/booking';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    
    <ChakraProvider >
    {/* <Navbare />
    <Header />
    <Booking /> 
    <Fund />
    <Footer1 />
    <Footer2 />
    <Footer3 /> */}
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
