import { Rating, IOffer } from '../types/offer';
import { IComment } from '../types/comment';

export const getRatingWidth = (rating: Rating): number => rating ? 20 * Number(rating) : 0;

export const sortOfferByPriceASC = (offers: IOffer[]) => [...offers].sort(({ price: firstPrice }, { price: secondPrice }) => firstPrice - secondPrice);
export const sortOfferByPriceDESC = (offers: IOffer[]) => [...offers].sort(({ price: firstPrice }, { price: secondPrice }) => secondPrice - firstPrice);
export const sortOfferByRatingDESC = (offers: IOffer[]) => [...offers].sort(({ rating: firstRating }, { rating: secondRating }) => Number(secondRating) - Number(firstRating));

export const sortCommentsByDate = (first:IComment, second:IComment) => {
  if (first.date < second.date) {
    return 1;
  }

  if (first.date > second.date) {
    return -1;
  }
  return 0;
};
