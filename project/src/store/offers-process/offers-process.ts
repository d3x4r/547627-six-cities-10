import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, City, OffersOption } from '../../const';
import { OffersProcess } from '../../types/state';

const DEFAULT_CITY = City.Paris;
const DEFAULT_OFFER_OPTION = OffersOption.popular;

const initialState: OffersProcess = {
  selectedCity: DEFAULT_CITY,
  highlightedOffer: null,
  selectedOfferOption: DEFAULT_OFFER_OPTION,
};

export const offerProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    selectCity: (state: OffersProcess, action: PayloadAction<City>) => {
      state.selectedCity = action.payload;
    },
    selectOfferOption: (state: OffersProcess, action: PayloadAction< OffersOption>) => {
      state.selectedOfferOption = action.payload;
    },
    highlightCard: (state: OffersProcess, action: PayloadAction<number | null>) => {
      state.highlightedOffer = action.payload;
    },
  },
});

export const { highlightCard, selectCity, selectOfferOption } = offerProcess.actions;
