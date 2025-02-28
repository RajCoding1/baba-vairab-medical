import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapsComponent = () => {
  // Using the correct location coordinates
  const position = [22.620192, 88.408498];

  return (
    <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%', borderRadius: '10px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          BABA VAIRAV MEDICAL<br />Your trusted medical store.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapsComponent;