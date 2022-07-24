import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import {
  MainPage,
  FavoritesPage,
  LoginPage,
  NotFoundPage,
  RoomPage
} from '../../pages';
import { PrivateRoute } from '../private-route';
import { IOffer } from '../../types/offer';

type AppPropsType = {
  places: IOffer[],
  favorites: IOffer[],
}

export const App = ({ places, favorites }: AppPropsType) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<MainPage places={places} />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Offer} element={<RoomPage />} />
      <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth }><FavoritesPage favorites={favorites} /></PrivateRoute>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
