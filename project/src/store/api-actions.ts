
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { IOffer } from '../types/offer';
import { loadOffers, setDataLoadedStatus } from './action';
import { APIRoute } from '../const';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setDataLoadedStatus(true));
    const { data } = await api.get<IOffer[]>(APIRoute.Hotels);
    dispatch(loadOffers(data));
    dispatch(setDataLoadedStatus(false));
  },
);
