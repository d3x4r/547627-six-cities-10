import { createAction } from '@reduxjs/toolkit';
import { City, OffersOption, AuthorizationStatus, AppRoute } from '../const';
import { IOffer } from '../types/offer';
import { IComment } from '../types/comment';

export const selectCity = createAction<City>('offers/selectCity');
export const selectOfferOption = createAction<OffersOption>('offers/selectOption');
export const highlightCard = createAction<IOffer['id'] | null>('offers/hightlightCard');
export const loadOffers = createAction<IOffer[]>('data/loadOffers');
export const setOffersLoadedStatus = createAction<boolean>('data/setOfferLoadedStatus');
export const setCurrentOfferLoadedStatus = createAction<boolean>('data/setCurrentOfferLoadedStatus');
export const setReviewFormStatus = createAction<boolean>('data/setReviewFormStatus');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
export const loadOffer = createAction<IOffer>('data/loadOffer');
export const loadComments = createAction<IComment[]>('data/loadComments');
export const loadNearPlaces = createAction<IOffer[]>('data/loadNearPlaces');
export const setError = createAction<string | null>('data/setError');
export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');
