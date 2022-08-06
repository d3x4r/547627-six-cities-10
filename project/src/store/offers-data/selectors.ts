import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { IOffer } from '../../types/offer';
import { IComment } from '../../types/comment';
import { getSelectedCity, getOfferOption } from '../offers-process/selectors';
import { OffersOption, OffersSorter } from '../../const';

export const getOffers = (state: State): IOffer[] => state[NameSpace.Data].allOffers;
export const getCurrentOffer = (state: State): IOffer | null => state[NameSpace.Data].currentOffer;
export const getOffersLoadedState = (state: State): boolean => state[NameSpace.Data].loadedState.isOffersLoaded;
export const getCurrentOfferLoadedState = (state: State): boolean => state[NameSpace.Data].loadedState.isCurrentOfferLoaded;
export const getNearPlaces = (state: State): IOffer[] | null => state[NameSpace.Data].nearPlaces;
export const getComments = (state: State): IComment[] | null => state[NameSpace.Data].comments;
export const getReviewFormLoadedState = (state: State): boolean => state[NameSpace.Data].loadedState.isReviewFormSubmited;
export const getFavoritesOffers = (state: State): IOffer[] | [] => state[NameSpace.Data].favorites;
export const getFilteredOffers = createSelector(
  [getOffers, getSelectedCity, getOfferOption],
  (offers, selectedCity, sortOption) => {
    const offersByCity = offers.filter(({ city: { name } }) => name === selectedCity);
    if (sortOption === OffersOption.popular) {
      return offersByCity;
    } else {
      const sorterFn = OffersSorter[sortOption];
      return sorterFn(offersByCity);
    }
  },
);
