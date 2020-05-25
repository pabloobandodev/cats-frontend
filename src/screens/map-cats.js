import React from "react";
import { Marker } from "@react-google-maps/api";
import { useCat } from "../context";
import { Card } from "../components/styles";
import Map from "../components/map";

const mapStyles = {
  margin: "0 auto",
  height: "60vh",
  width: "100%",
};

function MapCats() {
  const [cats] = useCat();

  const renderMarkers = () =>
    cats?.map(({ location, id }) => <Marker key={id} position={location} />);

  return (
    <Card>
      <h1>Map</h1>
      <Map mapContainerStyle={mapStyles}>{renderMarkers()}</Map>
    </Card>
  );
}

export default MapCats;
