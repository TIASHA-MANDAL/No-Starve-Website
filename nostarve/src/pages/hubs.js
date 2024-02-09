
import React from "react";
import Table from "react-bootstrap/Table";
import { data } from "./data.js";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import './hubs.css'
import { useNavigate } from 'react-router-dom';
import Navvv from "./navvv";
function Hubs(props) {
    const [search, setSearch] = useState("");
    console.log(search);
    const Navigate = useNavigate();
    //   function handleClick (){
    //     Navigate ("/Booknow")
    //   }

    React.useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="vvvv1">
            <div className="yyy1"><Navvv /></div>
            <div className="liss">
                <Table striped bordered hover variant="" className="hello" >
                    <thead>
                        <tr>
                            <th><h2>Profile</h2></th>
                            <th><h2>Name</h2></th>
                            <th className="s1w"><h2>Phone Number</h2></th>
                            <th className="s1w"><h2>Location</h2></th>
                            {/* <th className="s1w"><h3>City</h3></th> */}
                            {/* <th className="s1w"><h3>Modified</h3></th> */}
                            <div className="serc">
                                
                                <input
                                    type="search"
                                    className="search11"
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search for Cities"
                                    aria-label="Search"
                                    aria-describedby="search-addon"
                                />
                            </div>
                        </tr>
                    </thead>
                    <tbody>
                        {data
                            .filter((item) => {
                                return search.toLowerCase() === ''
                                    ? item
                                    : item.bdss.toLowerCase().includes(search);
                            })
                            .map((item) => (
                                <tr >
                                    <td>
                                        {item.Profile1}
                                    </td>
                                    <td>{item.Name1}</td>
                                    <td>{item.Center_for}</td>
                                    <td>{item.location1}</td>
                                    <td>{item.bdss}</td>
                                    {/* <td>{item.lm}</td> */}
                                    {/* <td ><a href={item.url}><button className="a11" >
                    Book Now</button></a></td> */}
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
export default Hubs;