import { useAppSelector } from '../../hooks';
import './style/style.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}

export default ErrorMessage;