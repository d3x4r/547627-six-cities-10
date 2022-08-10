import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header, NearPlaces, Reviews, Spinner } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadOfferAction, loadNearPlacesAction } from '../../store/api-actions';
import { getRatingWidth } from '../../utils';
import { Map } from '../../components';
import { getCurrentOffer, getCurrentOfferLoadedState, getNearPlaces } from '../../store/offers-data/selectors';

const IMAGES_MAX_COUNT = 6;

const RoomPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currentOffer = useAppSelector(getCurrentOffer);
  const isCurrentOfferLoaded = useAppSelector(getCurrentOfferLoadedState);
  const nearPlaces = useAppSelector(getNearPlaces);

  useEffect(() => {
    if (id) {
      dispatch(loadOfferAction(id));
    }
  }, [id]);

  useEffect(() => {
    if (currentOffer?.id) {
      dispatch(loadNearPlacesAction(currentOffer.id));
    }
  }, [currentOffer]);

  if (isCurrentOfferLoaded) {
    return <Spinner />;
  }

  if (!currentOffer) {
    return <h1>No offer loaded</h1>;
  }


  return (
    <div className="page">
      <Header withNavigation />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentOffer.images.slice(0, IMAGES_MAX_COUNT).map((link) => (
                <div
                  key={link}
                  className="property__image-wrapper"
                >
                  <img
                    className="property__image"
                    src={link}
                    alt={currentOffer.title}
                  />
                </div>))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentOffer.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name" data-testid="room-page-title">
                  {currentOffer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${getRatingWidth(currentOffer.rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentOffer.goods.map((itemName) => <li key={itemName} className="property__inside-item">{itemName}</li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {currentOffer.host.name}
                  </span>
                  {currentOffer.host.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <Reviews offerId={currentOffer.id} />
            </div>
          </div>
          <section className="property__map map">
            {nearPlaces && <Map places={nearPlaces.slice(0, 3)} currentPlace={currentOffer} />}
          </section>
        </section>
        <div className="container">
          {nearPlaces && <NearPlaces offers={nearPlaces} />}
        </div>
      </main>
    </div>
  );
};

export default RoomPage;
