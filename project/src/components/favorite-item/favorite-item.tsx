import { LocationsItem, PlaceCard } from '../../components';
import { IOffer } from '../../types/offer';
import { CardType } from '../place-card/const';

type FavoriteItemPropsType = {
  groupName: string,
  places: IOffer[],
}

const FavoriteItem = ({ places, groupName }: FavoriteItemPropsType) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <LocationsItem name={groupName} />
    </div>
    <div className="favorites__places">
      {places.map((place) => <PlaceCard key={place.id} place={place} cardType={CardType.favorite} />)}
    </div>
  </li>
);

export default FavoriteItem;
