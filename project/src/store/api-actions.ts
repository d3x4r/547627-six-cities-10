import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { IOffer } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { CommentData } from '../types/comment-data';
import { APIRoute } from '../const';
import { saveToken, dropToken } from '../services/token';
import { IComment } from '../types/comment';
import { FavoriteOfferData } from '../types/favorite-offer-data';

export const fetchOffersAction = createAsyncThunk<IOffer[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<IOffer[]>(APIRoute.Hotels);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const loadOfferAction = createAsyncThunk<IOffer, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchOffer',
  async (hotelId, { extra: api }) => {
    const { data } = await api.get(`${APIRoute.Hotels}/${hotelId}`);
    return data;
  },
);

export const loadCommentsAction = createAsyncThunk<IComment[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async (hotelId, { dispatch, extra: api }) => {
    const { data } = await api.get<IComment[]>(`${APIRoute.Comments}/${hotelId}`);
    return data;
  },
);

export const loadNearPlacesAction = createAsyncThunk<IOffer[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearPlaces',
  async (hotelId, { dispatch, extra: api }) => {
    const { data } = await api.get<IOffer[]>(`${APIRoute.Hotels}/${hotelId}/nearby`);
    return data;
  },
);

export const createComment = createAsyncThunk<IComment[], CommentData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/createComment',
  async ({ commentBody, hotelId }, { dispatch, extra: api }) => {
    const { data } = await api.post<IComment[]>(`${APIRoute.Comments}/${hotelId}`, commentBody);
    return data;
  },
);

export const loadFavoritesOffersAction = createAsyncThunk<IOffer[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoritesOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<IOffer[]>(`${APIRoute.Favorites}`);
    return data;
  },
);

export const createFavoriteOffer = createAsyncThunk<IOffer, FavoriteOfferData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/createFavoriteItem',
  async ({ status, hotelId }, { dispatch, extra: api }) => {
    const { data } = await api.post<IOffer>(`${APIRoute.Favorites}/${hotelId}/${status}`);
    return data;
  },
);
