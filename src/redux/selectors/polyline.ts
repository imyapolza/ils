import { LatLngBounds } from "leaflet";

export const polylineSelector = (state: {
  polyline: { polyline: Array<number> } | LatLngBounds;
}) => state.polyline;
