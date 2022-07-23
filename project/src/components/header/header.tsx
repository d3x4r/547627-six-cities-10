import { Link } from 'react-router-dom';
import { Navigation } from '../navigation';
import { AppRoute } from '../../const';

type HeaderPropsType = {
  withNavigation?: boolean,
}

const Header = ({ withNavigation }: HeaderPropsType) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link to={AppRoute.Root} className="header__logo-link header__logo-link--active">
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </Link>
        </div>
        {withNavigation && <Navigation />}
      </div>
    </div>
  </header>
);

export default Header;

