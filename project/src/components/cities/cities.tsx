import { PlacesList } from '../../components';
import { IOffer } from '../../types/offer';
import { Map } from '../map';

type CitiesPropsType = {
  places: IOffer[],
}

const Cities = ({ places }: CitiesPropsType) => {
  const placesCount = places.length;
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesCount} places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" >Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <PlacesList places={places} />
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map places={places} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cities;
