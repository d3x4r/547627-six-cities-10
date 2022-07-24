import { createAction } from '@reduxjs/toolkit';
import { City, OffersOption } from '../const';

export const selectCity = createAction<City>('offers/selectCity');
export const selectOfferOption = createAction<OffersOption>('offers/selectOption');
