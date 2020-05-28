import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

const defaultCenter = {
  lat: 9.8956782,
  lng: -84.0696677,
}

function Map(props) {
  return (
    <LoadScript
      loadingElement={<p>Loading...</p>}
      googleMapsApiKey='AIzaSyB9gDZR_YgZEWWh095rDycHQO7cawcqzG0'
    >
      <GoogleMap zoom={13} center={defaultCenter} {...props}></GoogleMap>
    </LoadScript>
  )
}

export { Map }
