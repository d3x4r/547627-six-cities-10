import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';

type PrivateRoutePropsType = {
  children: JSX.Element,
}

const PrivateRoute = ({ children }: PrivateRoutePropsType) => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
};

export default PrivateRoute;
