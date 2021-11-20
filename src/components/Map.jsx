import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ lat, lng }) => {
  const position = [lat, lng];
  return (
    <MapContainer
      className=" h-40 z-40"
      center={position}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>uwu</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
