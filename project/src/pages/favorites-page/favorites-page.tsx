import { Header, Footer, Favorites } from '../../components';
import { useAppSelector } from '../../hooks';
import { getFavoritesOffers } from '../../store/offers-data/selectors';

const FavoritesPage = () => {
  const offers = useAppSelector(getFavoritesOffers);

  return (
    <div className="page">
      <Header withNavigation />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {offers.length === 0 ? (
            <div className="page__favorites-container container">
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </section>
            </div>
          ) : <Favorites favorites={offers} />}

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
