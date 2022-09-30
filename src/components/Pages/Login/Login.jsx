import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/authOperation';
import { selectIsLoggedIn, selectToken } from 'redux/auth/authSelectors';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
    isLoggedIn && navigate('/contacts', { replace: true })
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input id="email" name="email" type="email" />
        <input id="password" name="password" type="password" />
        <Link to="/" className="d-block my-4">
          Dont have account?
        </Link>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
