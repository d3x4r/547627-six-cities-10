import { City } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectCity } from '../../store/offers-process/offers-process';
import { getSelectedCity } from '../../store/offers-process/selectors';

const Tabs = () => {
  const selectedCity = useAppSelector(getSelectedCity);

  const dispatch = useAppDispatch();
  const handleLinkClick = (city: City) => (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    dispatch(selectCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.keys(City).map((name) => (
            <li key={name} className="locations__item">
              <a
                className={`${selectedCity === name ? 'tabs__item--active' : ''} locations__item-link tabs__item}`}
                href="#"
                onClick={handleLinkClick(name as City)}
              >
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Tabs;
