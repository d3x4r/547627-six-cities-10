import { PlacesList } from '../places-list';
import { CitiesEmpty } from '../cities-empty';
import { Map } from '../map';
import { useAppSelector } from '../../hooks';
import { PlacesOptions } from '../places-options';
import { getSelectedCity } from '../../store/offers-process/selectors';
import { getFilteredOffers } from '../../store/offers-data/selectors';

const Cities = () => {
  const selectedCity = useAppSelector(getSelectedCity);
  const filteredOffers = useAppSelector(getFilteredOffers);

  return (
    <div className="cities">
      {filteredOffers.length === 0 ? <CitiesEmpty name={selectedCity} /> :
        (
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {selectedCity}</b>
              <PlacesOptions />
              <PlacesList places={filteredOffers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map places={filteredOffers} />
              </section>
            </div>
          </div>
        )}
    </div>
  );
};

export default Cities;
