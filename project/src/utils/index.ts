import { Rating } from '../types/offer';

export const getRatingWidth = (rating: Rating): number => rating ? 20 * Number(rating) : 0;
