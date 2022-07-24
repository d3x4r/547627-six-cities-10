import { Rating, IOffer } from '../types/offer';

export const getRatingWidth = (rating: Rating): number => rating ? 20 * Number(rating) : 0;

export const sortOfferByPriceASC = (offers: IOffer[]) => [...offers].sort(({ price: firstPrice }, { price: secondPrice }) => firstPrice - secondPrice);
export const sortOfferByPriceDESC = (offers: IOffer[]) => [...offers].sort(({ price: firstPrice }, { price: secondPrice }) => secondPrice - firstPrice);
export const sortOfferByRatingDESC = (offers: IOffer[]) => [...offers].sort(({ rating: firstRating }, { rating: secondRating }) => Number(secondRating) - Number(firstRating));
export const sortOfferByPupularityDESC = (offers: IOffer[]) => [...offers].sort(({ popularity: firstPopularity }, { popularity: secondPopularity }) => Number(secondPopularity) - Number(firstPopularity));
