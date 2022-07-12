import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';

interface IPrivateRouteProps {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const PrivateRoute = ({ authorizationStatus, children }: IPrivateRouteProps) => authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;

export default PrivateRoute;
