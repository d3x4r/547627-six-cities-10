import { useState } from 'react';
import { PlaceCard } from '../place-card';
import { IOffer } from '../../types/offer';

interface IPlacesListProps {
  places: IOffer[];
}

const PlacesList = ({ places }: IPlacesListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => <PlaceCard key={place.id} place={place} onSelect={setSelectedCard} />)}
    </div>
  );
};

export default PlacesList;
