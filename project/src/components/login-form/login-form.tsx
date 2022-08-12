import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { toast } from 'react-toastify';

const inValidPasswordMessage = 'Пароль должен состоять минимум из одной буквы и цифры';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useAppDispatch();

  const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const password = formData.password;
    if (/\d/.test(password) && /[a-zA-z]+/g.test(password)) {
      dispatch(loginAction({ email: formData.email, password: formData.password }));
    } else {
      toast.error(inValidPasswordMessage);
    }
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        onSubmit={onFormSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            className="login__input form__input"
            type="email" name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(evt) => setFormData({ ...formData, email: evt.target.value })}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={(evt) => setFormData({ ...formData, password: evt.target.value })}
          />
        </div>
        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    </section>
  );
};

export default LoginForm;
