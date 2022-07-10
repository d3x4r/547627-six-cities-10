import { Cities } from '../../components';
import { Header, Tabs } from '../../components';
import { PLACES } from '../../';

interface IMainPageProps {
  places: typeof PLACES,
}

const MainPage = ({ places }: IMainPageProps) => (
  <div className="page page--gray page--main">
    <Header withNavigation />
    <Tabs />

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Cities places={places} />
    </main>
  </div>
);

export default MainPage;
