import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'; // Memuat gaya default Leaflet
import 'leaflet/dist/images/marker-icon.png'; // Memuat ikon marker default
import 'leaflet/dist/images/marker-shadow.png'; // Memuat bayangan marker default

const MapBox = () => {
    const position = [-6.813655,108.324968]; // Koordinat Jl. Gn. Kuning - Sindang, Kec. Sindang, Kabupaten Majalengka

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
      />
      <Marker position={position}>
        <Popup>
        Jl. Gn. Kuning - Sindang, Kec. Sindang, Kabupaten Majalengka
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapBox;