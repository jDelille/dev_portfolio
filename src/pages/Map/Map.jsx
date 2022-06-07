import React, { useState, useRef } from 'react'
import MapGL from "react-map-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import mapboxgl from "mapbox-gl";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

function Map() {
 const [viewport, setViewport] = useState({
  latitude: 33.412990,
  longitude: -111.877740,
  zoom: 10
 });

 const MAPBOX_TOKEN = 'pk.eyJ1Ijoic29ja2xvcmQiLCJhIjoiY2t5ZjRza2x1MGlqeDJucnNoMTFleDc1cCJ9.FIzfyIV5X_ff2zE-CnJLoA'

 const mapRef = useRef();

 return (
  <div style={{ height: "60vh" }}>
   <MapGL
    ref={mapRef}
    {...viewport}
    width="100%"
    height="100%"
    mapboxApiAccessToken={MAPBOX_TOKEN}
    mapStyle="mapbox://styles/socklord/ckyf5h3kn07pz14ryx6tz4qem"
   >

   </MapGL>
  </div>
 )
}

export default Map