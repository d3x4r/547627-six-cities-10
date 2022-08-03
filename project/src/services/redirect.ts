import { store } from '../store';
import { AppRoute } from '../const';
import { redirectToRoute } from '../store/action';

export const redirect = (route: AppRoute): void => {
  store.dispatch(redirectToRoute(route));
};
