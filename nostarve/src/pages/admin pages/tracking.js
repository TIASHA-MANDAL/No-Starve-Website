import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import './tracking.css'
import { marker } from "leaflet";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import Navbarrecords from './nabarrecords';

export default function Tracking(){

    const [lat,setLat]=useState('')
    const [lon,setLon]=useState('')
    const [details, setDetails]=useState(null)

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((postion)=>{
            setLat(postion.coords.latitude)
            setLon(postion.coords.longitude)
        })
    },[])

    // const getUserGeolocationDetails=() =>{
    //     fetch("https://geolocation-db.com/json/e5e47150-bc2c-11ed-9b49-492949f4ff3d")
    //     .then( response => response.json())
    //     .then( data => setDetails(data));
    // }

    const markers=[
        {
            // geocode:[22.5597,88.3961],
            geocode:[lat,lon],
           // geocode:[`${getUserGeolocationDetails.details.latitude},${getUserGeolocationDetails.details.longitude}`],
            popup:"Parthib Das"
        }
    ];
    const customIcon= new Icon({
        iconUrl:"https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
        iconSize: [38,38]
    });
    return(
        <div>
        <div className='ttttit'> <Navbarrecords /></div>
        <MapContainer center={[22.5726,88.3639]} zoom={14}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                markers.map(marker =>(
                <Marker position={marker.geocode} icon={customIcon} >
                    <Popup>
                        {marker.popup}
                    </Popup>
                </Marker>
                ))
            }
        </MapContainer>
        </div>
    )
}