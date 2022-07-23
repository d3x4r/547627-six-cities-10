import { PlaceCard } from '../place-card';
import { IOffer } from '../../types/offer';
import { CardType } from '../place-card/const';

interface INearPlaces {
  places: IOffer[],
}

const NearPlaces = ({ places }: INearPlaces) => (
  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {places.map((place) => <PlaceCard key={place.id} place={place} cardType={CardType.nearPlace} />)}
    </div>
  </section>
);

export default NearPlaces;
