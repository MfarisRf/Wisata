// eslint-disable-next-line no-unused-vars
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'; // Memuat gaya default Leaflet
import 'leaflet/dist/images/marker-icon.png'; // Memuat ikon marker default
import 'leaflet/dist/images/marker-shadow.png'; // Memuat bayangan marker default

const MapBox = ({ coordinates }) => {
  // Periksa apakah koordinat valid
  if (!coordinates) {
    // Tampilkan pesan atau return null sesuai kebutuhan Anda
    return null;
  }

  // Pecah string koordinat menjadi array [lat, lng]
  const [lat, lng] = coordinates.split(',').map(parseFloat);

  // Periksa apakah hasil pecahan adalah angka yang valid
  if (isNaN(lat) || isNaN(lng)) {
    // Tampilkan pesan atau return null sesuai kebutuhan Anda
    return null;
  }

  const position = [lat, lng];

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Lokasi Wisata
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapBox;
