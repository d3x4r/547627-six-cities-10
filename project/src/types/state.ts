import { store } from '../store/index';
import { AuthorizationStatus, City, OffersOption } from '../const';
import { IOffer } from '../types/offer';
import { IComment } from '../types/comment';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type OffersData = {
  currentOffer: IOffer | null,
  allOffers: IOffer[],
  comments: IComment[] | null,
  nearPlaces: IOffer[] | null,
  loadedState: {
    isOffersLoaded: boolean,
    isCurrentOfferLoaded: boolean,
    isReviewFormSubmited: boolean,
  };
};

export type OffersProcess = {
  selectedCity: City,
  selectedOfferOption: OffersOption,
  highlightedOffer: IOffer['id'] | null;
};
