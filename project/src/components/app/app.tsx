import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

type AppPropsType = {
  favorites: IOffer[],
}

export const App = ({ favorites }: AppPropsType) => {
  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);

  if (isDataLoaded) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Offer} element={<RoomPage />} />
        <Route path={AppRoute.Favorites} element={<PrivateRoute><FavoritesPage favorites={favorites} /></PrivateRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
