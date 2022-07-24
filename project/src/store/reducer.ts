import { createReducer } from '@reduxjs/toolkit';
import { City } from '../const';
import { offers } from '../mocks/offers';
import { selectCity } from './action';

const DEFAULT_CITY = City.Paris;

const initialState = {
  selectedCity: DEFAULT_CITY,
  offers: offers.filter((offer) => offer.city === DEFAULT_CITY),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.selectedCity = action.payload;
      state.offers = offers.filter(({ city }) => city === action.payload);
    });
});

export { reducer };
