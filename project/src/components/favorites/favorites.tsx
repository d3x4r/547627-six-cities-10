import { FavoriteItem } from '../../components';
import { AMSTERDAM_FAVORITES, COLOGNE_FAVORITES } from './data';


const Favorites = () => (
  <section className="favorites">
    <h1 className="favorites__title">Saved listing</h1>
    <ul className="favorites__list">
      <FavoriteItem groupName="Amsterdam" places={AMSTERDAM_FAVORITES} />
      <FavoriteItem groupName="Cologne" places={COLOGNE_FAVORITES} />
    </ul>
  </section>
);

export default Favorites;
