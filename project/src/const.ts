import {
  sortOfferByPriceASC,
  sortOfferByPriceDESC,
  sortOfferByRatingDESC,
} from './utils';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '404',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Rating {
  Perfect = '5',
  Good = '4',
  NotBad = '3',
  Badly = '2',
  Terribly = '1',
}

export const MarkerIcon = {
  DEFAULT: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  SELECTED: `${process.env.PUBLIC_URL}/img/pin-active.svg`,
};

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum OffersOption {
  popular = 'Popular',
  priceAsc = 'Price: low to high',
  priceDesc = 'Price: high to low',
  topRated = 'Top rated first',
}

export const OffersSorter = {
  [OffersOption.priceAsc]: sortOfferByPriceASC,
  [OffersOption.priceDesc]: sortOfferByPriceDESC,
  [OffersOption.topRated]: sortOfferByRatingDESC,
};

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum NameSpace {
  Data = 'DATA',
  Offers = 'OFFERS',
  User = 'USER',
}
