import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersData } from '../../types/state';
import {
  loadOfferAction,
  loadCommentsAction,
  loadNearPlacesAction,
  createComment,
  fetchOffersAction,
  loadFavoritesOffersAction,
  createFavoriteOffer,
} from '../api-actions';

export const initialState: OffersData = {
  currentOffer: null,
  allOffers: [],
  comments: null,
  nearPlaces: null,
  favorites: [],
  loadedState: {
    isOffersLoaded: false,
    isCurrentOfferLoaded: false,
    isReviewFormSubmited: false,
  },
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.loadedState.isOffersLoaded = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.allOffers = action.payload;
        state.loadedState.isOffersLoaded = false;
      })
      .addCase(loadOfferAction.pending, (state) => {
        state.loadedState.isCurrentOfferLoaded = true;
      })
      .addCase(loadOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.loadedState.isCurrentOfferLoaded = false;
      })
      .addCase(loadCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(loadNearPlacesAction.fulfilled, (state, action) => {
        state.nearPlaces = action.payload;
      })
      .addCase(createComment.pending, (state) => {
        state.loadedState.isReviewFormSubmited = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loadedState.isReviewFormSubmited = false;
      })
      .addCase(loadFavoritesOffersAction.pending, (state) => {
        state.loadedState.isOffersLoaded = true;
      })
      .addCase(loadFavoritesOffersAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.loadedState.isOffersLoaded = false;
      })
      .addCase(createFavoriteOffer.fulfilled, (state, action) => {
        if (action.payload.isFavorite === false) {
          state.favorites = state.favorites.filter(({ id }) => id !== action.payload.id);
        } else {
          state.favorites = [...state.favorites, action.payload];
        }
        state.allOffers = state.allOffers.map((offer) => offer.id === action.payload.id ? { ...offer, isFavorite: action.payload.isFavorite } : offer);
      });
  }
});
