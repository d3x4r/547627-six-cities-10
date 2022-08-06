import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

export const setError = createAction<string | null>('data/setError');
export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');
