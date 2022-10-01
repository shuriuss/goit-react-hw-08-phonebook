import { useDispatch} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/authOperation';
// import { selectIsLoggedIn, selectToken } from 'redux/auth/authSelectors';
import s from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const token = useSelector(selectToken);

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
        <input className={s.input} placeholder='email' id="email" name="email" type="email" />
        <input
          className={s.input}
          id="password"
          name="password"
          type="password"
          placeholder='password'
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
