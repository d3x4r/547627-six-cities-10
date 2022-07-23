import { Header, Footer, Favorites } from '../../components';
import { IOffer } from '../../types/offer';

type FavoritesPagePropsType = {
  favorites: IOffer[],
}

const FavoritesPage = ({ favorites }: FavoritesPagePropsType) => (
  <div className="page">
    <Header withNavigation />

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <Favorites favorites={favorites} />
      </div>
    </main>
    <Footer />
  </div>
);

export default FavoritesPage;
