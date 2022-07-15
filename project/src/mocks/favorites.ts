import { IOffer } from '../types/offer';
import { Rating } from '../const';

export const favorites: IOffer[] = [{
  id: 1,
  isPremium: true,
  isBookMark: true,
  img: {
    href: '#',
    src: 'img/apartment-small-03.jpg',
  },
  price: 180,
  priceText: 'night',
  name: 'Nice, cozy, warm big bed apartment',
  type: 'Apartment',
  rating: Rating.Perfect,
  city: 'amsterdam',
},
{
  id: 2,
  isPremium: true,
  isBookMark: true,
  img: {
    href: '#',
    src: 'img/room-small.jpg',
  },
  price: 80,
  priceText: 'night',
  name: 'Wood and stone place',
  type: 'Private room',
  rating: Rating.Good,
  city: 'amsterdam',
},
{
  id: 3,
  isPremium: true,
  isBookMark: true,
  img: {
    href: '#',
    src: 'img/apartment-small-04.jpg',
  },
  price: 180,
  priceText: 'night',
  name: 'White castle',
  type: 'Apartment',
  rating: Rating.Perfect,
  city: 'cologne',
}];


