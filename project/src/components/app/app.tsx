import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import {
  MainPage, FavoritesPage, LoginPage,
  NotFoundPage, RoomPage
} from '../../pages';
import { PrivateRoute } from '../private-route';
import { PLACES } from '../../';

interface IAppProps {
  places: typeof PLACES;
}

export const App = ({ places }: IAppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<MainPage places={places} />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Offer} element={<RoomPage />} />
      <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><FavoritesPage /></PrivateRoute>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
