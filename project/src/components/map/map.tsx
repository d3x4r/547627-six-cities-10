import { useRef, useEffect } from 'react';
import { Icon, Marker, LayerGroup } from 'leaflet';
import { IOffer } from '../../types/offer';
import { useMap } from '../../hooks/use-map';
import { MarkerIcon } from '../../const';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks';
import { getHighlightedOffer } from '../../store/offers-process/selectors';

type MapPropsType = {
  places: IOffer[],
  currentPlace?: IOffer,
}

const defaultCustomIcon = new Icon({
  iconUrl: MarkerIcon.DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const selectedCustomIcon = new Icon({
  iconUrl: MarkerIcon.SELECTED,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const Map = ({ places, currentPlace }: MapPropsType) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, places[0]);
  const highlightedOffer = useAppSelector(getHighlightedOffer);

  useEffect(() => {
    const layerGroup = new LayerGroup();
    if (map) {
      map.setView({
        lat: places[0].location.latitude,
        lng: places[0].location.longitude,
      });

      layerGroup.addTo(map);
      places.forEach((place) => {
        const marker = new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        });

        marker
          .setIcon(place.id === highlightedOffer ? selectedCustomIcon : defaultCustomIcon)
          .addTo(layerGroup);

      });

      if (currentPlace) {
        const marker = new Marker({
          lat: currentPlace.location.latitude,
          lng: currentPlace.location.longitude,
        });

        marker
          .setIcon(selectedCustomIcon)
          .addTo(map);
      }
    }
    return () => {
      map?.removeLayer(layerGroup);
    };
  }, [map, places, highlightedOffer, currentPlace]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
};

export default Map;
