import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

import Header from '../Header'
import Sidebar from '../Sidebar'

import './Map.css'

const Map = () => {

    const TOKEN = "pk.eyJ1IjoiZ2FicmllbG1zOTgiLCJhIjoiY2toY21qNW9jMDFkdTJycDVrM3o5YzVpMyJ9.WXd_dIjYhpryywpaOt9PXg"

    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      });

    return (
        <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxApiAccessToken={TOKEN}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            className="map-container"
        >
            <Header />
            <Sidebar />
        </ReactMapGL>
    );
};

export default Map;
