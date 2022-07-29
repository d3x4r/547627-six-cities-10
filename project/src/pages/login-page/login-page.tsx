import { Header, LoginForm, LocationsItem } from '../../components';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus, AppRoute } from '../../const';

const LoginPage = () => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <section className="locations locations--login locations--current">
            <LocationsItem name="Amsterdam" />
          </section>
        </div>
      </main>
    </div>
  );
};
export default LoginPage;

