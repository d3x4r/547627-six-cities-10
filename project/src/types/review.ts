import { Rating } from './offer';

export interface IReview {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  rating: Rating;
  text: string;
  date: string;
}
