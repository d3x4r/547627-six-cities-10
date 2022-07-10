import { MainPage } from '../../pages';
import { PLACES } from '../../';

interface IAppProps {
  places: typeof PLACES;
}

export const App = ({ places }: IAppProps): JSX.Element => <MainPage places={places} />;

export default App;
