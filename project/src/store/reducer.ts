import { createReducer } from '@reduxjs/toolkit';
import { City, OffersOption } from '../const';
import {
  selectCity,
  selectOfferOption,
  highlightCard,
  loadOffers,
  setOffersLoadedStatus,
  setAuthorizationStatus,
  loadOffer,
  loadComments,
  loadNearPlaces,
  setCurrentOfferLoadedStatus,
  setReviewFormStatus,
  setError,
} from './action';
import { OffersSorter, AuthorizationStatus } from '../const';
import { IOffer } from '../types/offer';
import { IComment } from '../types/comment';
import { sortCommentsByDate } from '../utils';

const DEFAULT_CITY = City.Paris;
const DEFAULT_OFFER_OPTION = OffersOption.popular;

type InitialState = {
  selectedCity: City,
  allOffers: IOffer[],
  filteredOffers: IOffer[],
  selectedOfferOption: OffersOption,
  highlightedOffer: IOffer['id'] | null;
  loadedState: {
    isOffersLoaded: boolean,
    isCurrentOfferLoaded: boolean,
    isReviewFormSubmited: boolean,
  };
  authorizationStatus: AuthorizationStatus,
  currentOffer: IOffer | null,
  comments: IComment[] | null,
  nearPlaces: IOffer[] | null,
  error: string | null,
}

const initialState: InitialState = {
  selectedCity: DEFAULT_CITY,
  allOffers: [],
  filteredOffers: [],
  selectedOfferOption: DEFAULT_OFFER_OPTION,
  highlightedOffer: null,
  loadedState: {
    isOffersLoaded: false,
    isCurrentOfferLoaded: false,
    isReviewFormSubmited: false,
  },
  authorizationStatus: AuthorizationStatus.Unknown,
  currentOffer: null,
  comments: null,
  nearPlaces: null,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.selectedCity = action.payload;
      state.filteredOffers = state.allOffers.filter(({ city: { name } }) => name === action.payload);
    })
    .addCase(selectOfferOption, (state, action) => {
      state.selectedOfferOption = action.payload;
      if (state.selectedOfferOption === OffersOption.popular) {
        state.filteredOffers = state.allOffers.filter(({ city: { name } }) => name === state.selectedCity);
      } else {
        const sorterFn = OffersSorter[state.selectedOfferOption];
        state.filteredOffers = sorterFn(state.filteredOffers);
      }
    })
    .addCase(highlightCard, (state, action) => {
      state.highlightedOffer = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.allOffers = action.payload;
      state.filteredOffers = state.allOffers.filter(({ city: { name } }) => name === state.selectedCity);
    })
    .addCase(setOffersLoadedStatus, (state, action) => {
      state.loadedState.isOffersLoaded = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload.sort(sortCommentsByDate);
    })
    .addCase(loadNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(setReviewFormStatus, (state, action) => {
      state.loadedState.isReviewFormSubmited = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setCurrentOfferLoadedStatus, (state, action) => {
      state.loadedState.isCurrentOfferLoaded = action.payload;
    });
});

export { reducer };
