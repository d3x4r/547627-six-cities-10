import { offersData } from './offers-data';
import { initialState } from './offers-data';
import {
  fetchOffersAction,
  loadOfferAction,
  loadCommentsAction,
  loadNearPlacesAction,
  loadFavoritesOffersAction,
  createComment,
  createFavoriteOffer,
} from '../api-actions';
import { IOffer } from '../../types/offer';
import { Rating } from '../../const';
import { IComment } from '../../types/comment';

describe('Reducer: offers-data', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  describe('tests with offers', () => {
    let offer: IOffer;

    beforeEach(() => {
      offer =
      {
        bedrooms: 3,
        city: {
          location: {
            latitude: 52.370216,
            longitude: 4.895168,
            zoom: 10
          },
          name: 'Amsterdam'
        },
        description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        goods: [
          'Heating'
        ],
        host: {
          avatarUrl: 'img/1.png',
          id: 3,
          isPro: true,
          name: 'Angelina'
        },
        id: 1,
        images: [
          'img/1.png'
        ],
        isFavorite: true,
        isPremium: false,
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8
        },
        maxAdults: 4,
        previewImage: 'img/1.png',
        price: 120,
        rating: Rating.Good,
        title: 'Beautiful & luxurious studio at great location',
        type: 'apartment'
      };
    });


    it('should update allOffers by load offers', () => {
      expect(offersData.reducer(initialState, {
        type: fetchOffersAction.fulfilled.type, payload: [offer, offer]
      }))
        .toEqual({
          ...initialState,
          allOffers: [offer, offer]
        });
    });

    it('should update currentOffer by load offer', () => {
      expect(offersData.reducer(initialState, {
        type: loadOfferAction.fulfilled.type, payload: offer
      }))
        .toEqual({
          ...initialState,
          currentOffer: offer
        });
    });

    it('should update nearPlaces by load near places', () => {
      expect(offersData.reducer(initialState, {
        type: loadNearPlacesAction.fulfilled.type, payload: [offer, offer, offer]
      }))
        .toEqual({
          ...initialState,
          nearPlaces: [offer, offer, offer]
        });
    });

    it('should update favorites by load favorites', () => {

      expect(offersData.reducer(initialState, {
        type: loadFavoritesOffersAction.fulfilled.type, payload: [offer, offer, offer, offer]
      }))
        .toEqual({
          ...initialState,
          favorites: [offer, offer, offer, offer]
        });
    });

    it('should update favorites by load favorite', () => {
      expect(offersData.reducer(initialState, {
        type: createFavoriteOffer.fulfilled.type, payload: offer
      }))
        .toEqual({
          ...initialState,
          favorites: [offer]
        });
    });
  });

  describe('tests with comments', () => {
    let comment: IComment;

    beforeEach(() => {
      comment =
      {
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        date: 'Tue Aug 09 2022 21:18:28 GMT+0500 (Екатеринбург, стандартное время)',
        id: 1,
        rating: Rating.Good,
        user: {
          avatarUrl: 'img/1.png',
          id: 1,
          isPro: false,
          name: 'Oliver.conner'
        }
      };
    });

    it('should update comments by load comments', () => {
      expect(offersData.reducer(initialState, {
        type: loadCommentsAction.fulfilled.type, payload: [comment, comment]
      }))
        .toEqual({
          ...initialState,
          comments: [comment, comment]
        });
    });

    it('should update comments by load comment', () => {
      expect(offersData.reducer(initialState, {
        type: createComment.fulfilled.type, payload: comment
      }))
        .toEqual({
          ...initialState,
          comments: comment
        });
    });
  });
});
