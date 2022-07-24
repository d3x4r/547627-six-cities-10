import { createReducer } from '@reduxjs/toolkit';
import { City, OffersOption } from '../const';
import { offers } from '../mocks/offers';
import { selectCity, selectOfferOption, highlightCard } from './action';
import { OffersSorter } from '../const';
import { IOffer } from '../types/offer';

const DEFAULT_CITY = City.Paris;
const DEFAULT_OFFER_OPTION = OffersOption.popular;

const initialState: {
  selectedCity: City,
  offers: IOffer[],
  selectedOfferOption: OffersOption,
  highlightedOffer: IOffer['id'] | null;
} = {
  selectedCity: DEFAULT_CITY,
  offers: offers.filter((offer) => offer.city === DEFAULT_CITY),
  selectedOfferOption: DEFAULT_OFFER_OPTION,
  highlightedOffer: null,
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
    })
    .addCase(highlightCard, (state, action) => {
      state.highlightedOffer = action.payload;
    });
});

export { reducer };
