import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { IOffer } from '../../types/offer';
import { urlTemplate, attribution } from './const';

export function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  offer: IOffer
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: offer.location.latitude,
          lng: offer.location.longitude
        },
        zoom: offer.city.location.zoom
      });

      const layer = new TileLayer(urlTemplate, { attribution: attribution });

      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, offer]);

  return map;
}


