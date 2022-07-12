import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MainPage, FavoritesPage, LoginPage, NotFoundPage, RoomPage } from '../../pages';
import { PLACES } from '../../';

interface IAppProps {
  places: typeof PLACES;
}

export const App = ({ places }: IAppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<MainPage places={places} />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Favorites} element={<FavoritesPage />} />
      <Route path={AppRoute.Offer} element={<RoomPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
