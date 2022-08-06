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
import { IOffer } from '../../types/offer';
import { Spinner } from '../spinner';
import { HistoryRoute } from '../history-route';
import browserHistory from '../../browser-history';
import { getOffersLoadedState } from '../../store/offers-data/selectors';

type AppPropsType = {
  favorites: IOffer[],
}

export const App = ({ favorites }: AppPropsType) => {
  const isDataLoaded = useAppSelector(getOffersLoadedState);

  if (isDataLoaded) {
    return <Spinner />;
  }

  return (
    <HistoryRoute history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Offer} element={<RoomPage />} />
        <Route path={AppRoute.Favorites} element={<PrivateRoute><FavoritesPage favorites={favorites} /></PrivateRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HistoryRoute>
  );
};

export default App;
