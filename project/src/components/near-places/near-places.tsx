import { PlaceCard } from '../place-card';
import { CardType } from '../place-card/const';
import { IOffer } from '../../types/offer';

type NearPlacesPropsTypes = {
  offers: IOffer[]
}

const NearPlaces = ({ offers }: NearPlacesPropsTypes) => (
  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {offers.map((place) => <PlaceCard key={place.id} place={place} cardType={CardType.nearPlace} />)}
    </div>
  </section>
);

export default NearPlaces;
