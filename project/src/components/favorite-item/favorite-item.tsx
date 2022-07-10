import { LocationsItem, PlaceCard } from '../../components';
import { PLACES } from '../../';

interface IFavoriteItemProps {
  groupName: string,
  places: typeof PLACES
}

const FavoriteItem = ({ places, groupName }: IFavoriteItemProps) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <LocationsItem name={groupName} />
    </div>
    <div className="favorites__places">
      {places.map((place, index) => <PlaceCard key={`${place.name + index}`} place={place} isFavoriteCard />)}
    </div>
  </li>
);

export default FavoriteItem;
