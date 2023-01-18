import { LatLngBounds, LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Polyline, TileLayer, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import { polylineSelector } from "../../redux/selectors/polyline";
import styles from "./styles.module.scss";

interface IChangeView {
  center: LatLngExpression;
  zoom: number;
  polyline: LatLngBounds;
  checkP: Array<number[]>;
}

function ChangeView({ center, zoom, polyline, checkP }: IChangeView) {
  const map = useMap();
  map.setView(center, zoom);

  if (checkP.length > 0) {
    map.fitBounds(polyline);
  }

  return null;
}

const LeafletMap = () => {
  useEffect(() => {}, []);

  const limeOptions = { color: "lime" };

  const [center, setCenter] = useState({ lat: 36.460353, lng: 126.440674 });

  const { polyline } = useSelector(polylineSelector) as any;

  useEffect(() => {
    if (polyline && polyline.length > 0) {
      setCenter({ lat: polyline[0][0], lng: polyline[0][1] });
    }
  }, [polyline]);

  return (
    <div>
      <MapContainer
        className={styles.wrapper}
        center={center}
        zoom={13}
        scrollWheelZoom={true}
      >
        <ChangeView
          center={center}
          zoom={13}
          polyline={polyline}
          checkP={polyline}
        />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Polyline pathOptions={limeOptions} positions={polyline} />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
