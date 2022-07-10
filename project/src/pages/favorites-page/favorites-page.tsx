import { Header, Footer, Favorites } from '../../components';

const FavoritesPage = () => (
  <div className="page">
    <Header withNavigation />

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <Favorites />
      </div>
    </main>
    <Footer />
  </div>
);

export default FavoritesPage;
