import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import Header from '../Header'
import Sidebar from '../Sidebar'

import './Map.css'

const Map = () => {

    const [usinas, setUsinas] = useState([])

    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: -19.9774226,
        longitude: -43.9394392,
        zoom: 12
    });

    const getMyPowerPlants = (powerPlantsThatIOwn) => {
        let allPowerPlants = require("../../api/infoUsina.json")

        allPowerPlants = allPowerPlants.filter(p => powerPlantsThatIOwn.some(number => number === p.numeroUsina))

        setUsinas(allPowerPlants)
    }

    const goToPowerPlantInfo = (powerPlantNumber) => {
        console.log(powerPlantNumber)
    }

    useEffect(() => {
        getMyPowerPlants([1, 2, 3])
    }, {})

    return (
        <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            className="map-container"
        >

            <Header />
            <Sidebar />
            
            {
                usinas.map(usina => (
                    <div 
                        onClick={() => goToPowerPlantInfo(usina.numeroUsina)}
                    >
                        <Marker
                            latitude={usina.latitude}
                            longitude={usina.longitude}
                            className="marker"
                        >
                            <svg id="Flat" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"
                                className="powerplant-icon"
                                style={{
                                    height: `${6 * viewport.zoom}px`,
                                    width: `${6 * viewport.zoom}px`,
                                    cursor: 'pointer'
                                }}>
                                <path d="m496 112c0 7.879-16.764 13.451-18.707 20.717-2.009 7.519 9.663 20.713 5.855 27.3-3.864 6.677-21.161 3.137-26.58 8.556s-1.879 22.716-8.556 26.58c-6.583 3.808-19.777-7.865-27.3-5.855-7.263 1.937-12.834 18.702-20.712 18.702s-13.451-16.764-20.718-18.706c-7.518-2.01-20.712 9.663-27.3 5.854-6.678-3.864-3.137-21.161-8.556-26.58s-22.716-1.879-26.58-8.556c-3.808-6.583 7.865-19.777 5.855-27.295-1.938-7.268-18.701-12.839-18.701-20.717s16.764-13.451 18.706-20.717c2.01-7.519-9.663-20.713-5.854-27.3 3.863-6.677 21.16-3.137 26.58-8.556s1.878-22.716 8.556-26.579c6.583-3.809 19.777 7.864 27.295 5.854 7.266-1.939 12.837-18.702 20.717-18.702s13.45 16.764 20.717 18.707c7.519 2.009 20.713-9.664 27.3-5.855 6.677 3.864 3.136 21.161 8.556 26.58s22.716 1.879 26.579 8.556c3.809 6.583-7.864 19.777-5.855 27.295 1.938 7.266 18.703 12.837 18.703 20.717z" fill="#ff750a" /><circle cx="399.999" cy="111.999" fill="#ffd33a" r="48" /><path d="m232 56a24.326 24.326 0 0 0 -3.237.223 40.009 40.009 0 0 0 -73.526 0 24.35 24.35 0 0 0 -3.237-.223 24 24 0 1 0 12.148 44.7 39.964 39.964 0 0 0 55.7 0 24 24 0 1 0 12.152-44.7z" fill="#a3d4f7" /><path d="m120 96a24.326 24.326 0 0 0 -3.237.223 40.009 40.009 0 0 0 -73.526 0 24.35 24.35 0 0 0 -3.237-.223 24 24 0 1 0 12.148 44.7 39.964 39.964 0 0 0 55.7 0 24 24 0 1 0 12.152-44.7z" fill="#a3d4f7" /><path d="m256 344v152h-32-208v-152l104-152h32z" fill="#f0dfce" /><path d="m448 336h-224l-28.89-40-11.55-16-23.12-32-11.55-16-28.89-40h224l28.89 40 11.55 16 23.12 32 11.55 16z" fill="#3397e8" /><path d="m419.11 296-11.55-16h-62.12l-23.14-32h62.14l-11.55-16h-62.15l-28.92-40h-19.75l28.93 40h-52.29l-28.83-40h-19.72l28.83 40h-70.1l11.55 16h70.07l23.06 32h-70.01l11.55 16h69.99l28.83 40h19.72l-28.83-40h52.44l28.92 40h19.75l-28.93-40zm-145.82-16-23.06-32h52.33l23.14 32z" fill="#e9eef2" /><path d="m111.994 352a8 8 0 0 1 -6.394-12.8l14.4-19.2h-16a8 8 0 0 1 -6.4-12.8l24-32a8 8 0 1 1 12.8 9.6l-14.4 19.2h16a8 8 0 0 1 6.4 12.8l-24 32a7.985 7.985 0 0 1 -6.406 3.2z" fill="#ff750a" /><path d="m224 336h224v160h-224z" fill="#fbe9d8" /><path d="m288 384h96v48h-96z" fill="#996046" /><path d="m328 384h16v48h-16z" fill="#b37a60" /><path d="m88 384h64v112h-64z" fill="#996046" /></svg>
                        </Marker>
                    </div>
                ))
            }
        </ReactMapGL>
    );
};

export default Map;
