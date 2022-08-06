import { Cities, Header, Tabs } from '../../components';

const MainPage = () => (
  <div className="page page--gray page--main">
    <Header withNavigation />
    <Tabs />

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Cities />
    </main>
  </div>
);

export default MainPage;
