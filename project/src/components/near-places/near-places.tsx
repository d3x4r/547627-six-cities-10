import { useEffect } from 'react';
import { PlaceCard } from '../place-card';
import { CardType } from '../place-card/const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { loadNearPlacesAction } from '../../store/api-actions';

interface INearPlaces {
  offerId: number;
}

const NearPlaces = ({ offerId }: INearPlaces) => {
  const { nearPlaces, currentOffer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadNearPlacesAction(offerId));
  }, [currentOffer]);

  if (!nearPlaces) {
    return <>No NearPlaces Loaded</>;
  }
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearPlaces.map((place) => <PlaceCard key={place.id} place={place} cardType={CardType.nearPlace} />)}
      </div>
    </section>
  );
};

export default NearPlaces;
