import React, { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import { IOffer } from '../../types/offer';
import { useMap } from '../../hooks/use-map';
import { URL_MARKER_DEFAULT } from '../../const';
import 'leaflet/dist/leaflet.css';

interface IMapProps {
  places: IOffer[],
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const Map = ({ places }: IMapProps) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, places[0]);

  useEffect(() => {
    if (map) {
      places.forEach((place) => {
        const marker = new Marker({
          lat: place.points.lat,
          lng: place.points.lng,
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, places]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
};

export default Map;
