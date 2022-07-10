import { Header, LoginForm, LocationsItem } from '../../components';

const LoginPage = () => (

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

export default LoginPage;

