import React from "react";
import {MapContainer, TileLayer, useMap, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import IconMap from "../Icons/iconMap";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from "leaflet";

function Map() {
    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={14}
            scrollWheelZoom={false}
            style={{height: "450px", width: "100%"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={[51.505, -0.09]}
                icon={
                    new Icon({
                        iconUrl: markerIconPng,
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                    })
                }>
                <Popup>
                    <IconMap /> Shop
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
