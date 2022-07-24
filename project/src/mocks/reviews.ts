import { IReview } from '../types/review';
import { Rating } from '../const';

export const reviews: IReview[] = [{
  id: 1,
  user: {
    name: 'Max',
    avatar: 'img/avatar-max.jpg',
  },
  rating: Rating.Good,
  text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  date: 'April 2019',
},
{
  id: 2,
  user: {
    name: 'Max2',
    avatar: 'img/avatar-max.jpg',
  },
  rating: Rating.Perfect,
  text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century 2.',
  date: 'April 2020',
}];


