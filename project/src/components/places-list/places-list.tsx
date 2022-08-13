import { PlaceCard } from '../place-card';
import { IOffer } from '../../types/offer';
import { useAppDispatch } from '../../hooks';
import { highlightCard } from '../../store/offers-process/offers-process';

type PlacesListPropsTypes = {
  places: IOffer[],
}

const PlacesList = ({ places }: PlacesListPropsTypes) => {
  const dispatch = useAppDispatch();
  const onPlaceSelect = (id: IOffer['id'] | null) => dispatch(highlightCard(id));

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => <PlaceCard key={place.id} place={place} onSelect={onPlaceSelect} />)}
    </div>
  );
};

export default PlacesList;
