import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import {
  MainPage,
  FavoritesPage,
  LoginPage,
  NotFoundPage,
  RoomPage
} from '../../pages';
import { PrivateRoute } from '../private-route';
import { Spinner } from '../spinner';
import { getOffersLoadedState } from '../../store/offers-data/selectors';

export const App = () => {
  const isDataLoaded = useAppSelector(getOffersLoadedState);

  if (isDataLoaded) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route path={AppRoute.Root} element={<MainPage />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Offer} element={<RoomPage />} />
      <Route path={AppRoute.Favorites} element={<PrivateRoute><FavoritesPage /></PrivateRoute>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
