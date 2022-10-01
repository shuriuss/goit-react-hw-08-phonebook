import Navigations from 'components/Navigations';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import s from './Header.module.css';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    !isLoggedIn && (
      <header className={s.header}>
        <Navigations />
        {/* <Link></Link> */}
        {/* {!isLoggedIn && <Register />}
      {!isLoggedIn && <Login />} */}
      </header>
    )
  );
};

export default Header;
