import { IOffer } from '../types/offer';
import { Rating } from '../const';

export const offers: IOffer[] = [
  {
    id: 1,
    isPremium: true,
    isBookMark: false,
    img: {
      href: '#',
      src: 'img/apartment-01.jpg',
    },
    price: 120,
    priceText: 'night',
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    rating: Rating.Good,
    city: 'amsterdam',
  }, {
    id: 2,
    isPremium: false,
    isBookMark: true,
    img: {
      href: '#',
      src: 'img/room.jpg',
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
    isBookMark: false,
    isPremium: false,
    img: {
      href: '#',
      src: 'img/apartment-02.jpg',
    },
    price: 132,
    priceText: 'night',
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    rating: Rating.Good,
    city: 'amsterdam',
  },
  {
    id: 4,
    isBookMark: false,
    isPremium: false,
    img: {
      href: '#',
      src: 'img/apartment-03.jpg',
    },
    price: 180,
    priceText: 'night',
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    rating: Rating.Perfect,
    city: 'amsterdam',
  },
  {
    id: 5,
    isBookMark: true,
    isPremium: false,
    img: {
      href: '#',
      src: 'img/room.jpg',
    },
    price: 80,
    priceText: 'night',
    name: 'Wood and stone place',
    type: 'Private room',
    rating: Rating.Good,
    city: 'amsterdam',
  }];
