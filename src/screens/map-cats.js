import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function MapCats() {
  const mapStyles = {
    margin: "0 auto",
    height: "60vh",
    width: "60%",
  };

  const defaultCenter = {
    lat: 9.8956782,
    lng: -84.0696677,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB9gDZR_YgZEWWh095rDycHQO7cawcqzG0">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
}

export default MapCats;
