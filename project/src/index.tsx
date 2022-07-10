import React from 'react';
import ReactDOM from 'react-dom/client';
import { PlaceCard, App } from './components/';

export const PLACES: React.ComponentProps<typeof PlaceCard>['place'][] = [
  {
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
    rating: 4,
  }, {
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
    rating: 4,
  },
  {
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
    rating: 4,
  },
  {
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
    rating: 5,
  },
  {
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
    rating: 4,
  }];


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App places={PLACES}/>
  </React.StrictMode>,
);
