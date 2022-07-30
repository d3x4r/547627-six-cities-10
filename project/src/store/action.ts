import { createAction } from '@reduxjs/toolkit';
import { City, OffersOption, AuthorizationStatus } from '../const';
import { IOffer } from '../types/offer';

export const selectCity = createAction<City>('offers/selectCity');
export const selectOfferOption = createAction<OffersOption>('offers/selectOption');
export const highlightCard = createAction<IOffer['id'] | null>('offers/hightlightCard');
export const loadOffers = createAction<IOffer[]>('data/loadOffers');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
