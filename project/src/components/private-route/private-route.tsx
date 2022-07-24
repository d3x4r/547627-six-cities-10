import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';

type PrivateRoutePropsType = {
  authorizationStatus: AuthorizationStatus,
  children: JSX.Element,
}

const PrivateRoute = ({ authorizationStatus, children }: PrivateRoutePropsType) => authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;

export default PrivateRoute;
