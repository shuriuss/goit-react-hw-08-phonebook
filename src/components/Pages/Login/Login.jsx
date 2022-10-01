import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/authOperation';
import s from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email: e.currentTarget.elements.email.value,
        password: e.currentTarget.elements.password.value,
      }),
      e.currentTarget.reset()
    );
    navigate('/contacts', { replace: true });
  };

  return (
    <div className={s.box}>
      <form action="" onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          placeholder="email"
          id="email"
          name="email"
          type="email"
          autoComplete="on"
        />
        <input
          className={s.input}
          autoComplete="off"
          id="password"
          name="password"
          type="password"
          placeholder="password"
        />
        <Link to="/" className="d-block my-4">
          Dont have account?
        </Link>
        <button type="submit" className={s.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
