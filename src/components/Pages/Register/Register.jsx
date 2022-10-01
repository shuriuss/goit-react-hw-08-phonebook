import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/authOperation';
import s from './Register.module.css'

// const initialState = {
//   email: '',
//   name: '',
//   password: '',
// };

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
    <div className={s.box}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input 
        className={s.input}
        id="name" 
        name="name" 
        type="name" 
        placeholder="name" 
        autoComplete="off"
        />

        <input 
        className={s.input}
        id="email" 
        name="email" 
        type="email" 
        placeholder="email" 
        autoComplete="off"
        />

        <input
        className={s.input}
          id="password"
          name="password"
          type="password"
          placeholder="password"
          autoComplete="off"
        />

        <button 
        className={s.button}
        type="submit" >Submit</button>
        <Link to="/login" className={s.input}>
          I already have an account
        </Link>
      </form>
    </div>
  );
};

export default Register;
