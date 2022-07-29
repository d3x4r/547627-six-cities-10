import { createReducer } from '@reduxjs/toolkit';
import { City, OffersOption } from '../const';
import { selectCity, selectOfferOption, highlightCard, loadOffers, setDataLoadedStatus } from './action';
import { OffersSorter } from '../const';
import { IOffer } from '../types/offer';

const DEFAULT_CITY = City.Paris;
const DEFAULT_OFFER_OPTION = OffersOption.popular;

type InitialState = {
  selectedCity: City,
  allOffers: IOffer[],
  filteredOffers: IOffer[],
  selectedOfferOption: OffersOption,
  highlightedOffer: IOffer['id'] | null;
  isDataLoaded: boolean;
}

const initialState: InitialState = {
  selectedCity: DEFAULT_CITY,
  allOffers: [],
  filteredOffers: [],
  selectedOfferOption: DEFAULT_OFFER_OPTION,
  highlightedOffer: null,
  isDataLoaded: false,
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
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export { reducer };
