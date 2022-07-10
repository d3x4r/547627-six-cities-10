interface ILocaitonsItemsProps {
  name: string
}

const LocationItems = ({ name }: ILocaitonsItemsProps) => (
  <div className="locations__item">
    <a className="locations__item-link" href="#">
      <span>{name}</span>
    </a>
  </div>
);

export default LocationItems;
