
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { IOffer } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { CommentData } from '../types/comment-data';
import {
  loadOffers,
  setOffersLoadedStatus,
  setAuthorizationStatus,
  loadOffer,
  loadComments,
  loadNearPlaces,
  setCurrentOfferLoadedStatus,
  setReviewFormStatus,
  setError,
} from './action';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { saveToken, dropToken } from '../services/token';
import { IComment } from '../types/comment.js';
import { store } from './';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersLoadedStatus(true));
    const { data } = await api.get<IOffer[]>(APIRoute.Hotels);
    dispatch(loadOffers(data));
    dispatch(setOffersLoadedStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
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
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
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
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

export const loadOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (hotelId, { dispatch, extra: api }) => {
    dispatch(setCurrentOfferLoadedStatus(true));
    const { data } = await api.get<IOffer>(`${APIRoute.Hotels}/${hotelId}`);
    dispatch(loadOffer(data));
    dispatch(setCurrentOfferLoadedStatus(false));
  },
);

export const loadCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async (hotelId, { dispatch, extra: api }) => {
    const { data } = await api.get<IComment[]>(`${APIRoute.Comments}/${hotelId}`);
    dispatch(loadComments(data));
  },
);

export const loadNearPlacesAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearPlaces',
  async (hotelId, { dispatch, extra: api }) => {
    const { data } = await api.get<IOffer[]>(`${APIRoute.Hotels}/${hotelId}/nearby`);
    dispatch(loadNearPlaces(data));
  },
);

export const createComment = createAsyncThunk<void, CommentData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/createComment',
  async ({ commentBody, hotelId }, { dispatch, extra: api }) => {
    dispatch(setReviewFormStatus(true));
    const { data } = await api.post<IComment[]>(`${APIRoute.Comments}/${hotelId}`, commentBody);
    dispatch(loadComments(data));
    dispatch(setReviewFormStatus(false));
  },
);

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

