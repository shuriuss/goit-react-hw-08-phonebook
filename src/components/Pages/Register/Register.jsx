import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';

const initialState = {
  email: '',
  name: '',
  password: '',
};

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="name" name="name" type="name" placeholder="name" />

        <input id="email" name="email" type="email" placeholder="email" />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="password"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
