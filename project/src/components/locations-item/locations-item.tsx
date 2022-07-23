type LocationItemsPropsType = {
  name: string,
}

const LocationItems = ({ name }: LocationItemsPropsType) => (
  <div className="locations__item">
    <a className="locations__item-link" href="#">
      <span>{name}</span>
    </a>
  </div>
);

export default LocationItems;
