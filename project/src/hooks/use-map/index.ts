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
          lat: offer.points.lat,
          lng: offer.points.lng
        },
        zoom: 10
      });

      const layer = new TileLayer(urlTemplate, { attribution: attribution });

      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, offer]);

  return map;
}


