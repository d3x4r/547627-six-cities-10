import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getCurrentUserEmail } from '../../store/user-process/selectors';
import { getFavoritesOffers } from '../../store/offers-data/selectors';


const Navigation = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const currentUserEmail = useAppSelector(getCurrentUserEmail);
  const favoritesItems = useAppSelector(getFavoritesOffers);
  const dispatch = useAppDispatch();

  const handleLinkClick = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth ? (
          <>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">{currentUserEmail ? currentUserEmail : 'missing user email'}</span>
                <span className="header__favorite-count">{favoritesItems.length}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" onClick={handleLinkClick}>
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </>
        ) : (
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
