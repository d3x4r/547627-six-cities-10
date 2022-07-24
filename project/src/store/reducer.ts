import { createReducer } from '@reduxjs/toolkit';
import { City, OffersOption } from '../const';
import { offers } from '../mocks/offers';
import { selectCity, selectOfferOption } from './action';
import { OffersSorter } from '../const';

const DEFAULT_CITY = City.Paris;
const DEFAULT_OFFER_OPTION = OffersOption.popular;

const initialState = {
  selectedCity: DEFAULT_CITY,
  offers: offers.filter((offer) => offer.city === DEFAULT_CITY),
  selectedOfferOption: DEFAULT_OFFER_OPTION,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.selectedCity = action.payload;
      state.offers = offers.filter(({ city }) => city === action.payload);
    })
    .addCase(selectOfferOption, (state, action) => {
      state.selectedOfferOption = action.payload;
      const sorterFn = OffersSorter[state.selectedOfferOption];
      state.offers = sorterFn(state.offers);
    });
});

export { reducer };
