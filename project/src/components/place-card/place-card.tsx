import { Link } from 'react-router-dom';
import { getRatingWidth } from '../../utils';
import { IOffer } from '../../types/offer';
import { CardType } from './const';
import { useAppDispatch } from '../../hooks';
import { createFavoriteOffer } from '../../store/api-actions';
import { FavoriteOfferStatus } from '../../const';

type PlaceCardPropsTypes = {
  place: IOffer,
  onSelect?: (param: IOffer['id'] | null) => void
  cardType?: CardType,
}

const PlaceCard = ({ place: { id, city: { name }, type, price, previewImage, rating, title, isFavorite }, cardType = CardType.cities, onSelect = () => ({}) }: PlaceCardPropsTypes) => {
  const imgWidth = cardType === CardType.favorite ? 150 : 260;
  const imgHeight = cardType === CardType.favorite ? 110 : 200;
  const dispatch = useAppDispatch();

  const onAddOfferToFavorite = () => dispatch(createFavoriteOffer({ hotelId: id, status: isFavorite ? FavoriteOfferStatus.NotFavorite : FavoriteOfferStatus.Favorite }));

  return (
    <article
      className={`${cardType}__card place-card`}
      onMouseEnter={() => onSelect(id)}
      onMouseLeave={() => onSelect(null)}
    >
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={imgWidth} height={imgHeight} alt={title} />
        </a>
      </div>
      <div className={`${cardType === CardType.favorite ? `${cardType}__card-info` : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button place-card__bookmark-button${isFavorite ? '--active' : ''} button`}
            type="button"
            onClick={onAddOfferToFavorite}
          >
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
      </div >
    </article >
  );
};

export default PlaceCard;
