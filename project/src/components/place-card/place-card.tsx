import { Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { getRatingWidth } from './utils';
import { IOffer } from '../../types/offer';

interface IPlaceCardProps {
  place: IOffer;
  isFavoriteCard?: boolean;
  onSelect?: Dispatch<React.SetStateAction<number | null>>;
}

const PlaceCard = ({ place: { id, name, type, price, priceText, img, rating }, isFavoriteCard = false, onSelect = () => ({}) }: IPlaceCardProps) => {
  const imgWidth = isFavoriteCard ? 150 : 260;
  const imgHeight = isFavoriteCard ? 110 : 200;
  const cardClassName = isFavoriteCard ? 'favorites__card' : 'cities__card';
  const infoClassName = isFavoriteCard ? 'favorites__card-info' : '';
  const imgClassName = isFavoriteCard ? 'favorites__image-wrapper' : 'cities__image-wrapper';

  return (
    <article
      className={`${cardClassName} place-card`}
      onMouseEnter={() => onSelect(id)}
      onMouseLeave={() => onSelect(null)}
    >
      <div className={`${imgClassName} place-card__image-wrapper`}>
        <a href={img.href}>
          <img className="place-card__image" src={img.src} width={imgWidth} height={imgHeight} alt="Place image" />
        </a>
      </div>
      <div className={`${infoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{priceText}</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingWidth(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${String(id)}`}>{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
