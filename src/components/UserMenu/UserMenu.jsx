import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import {  selectUser } from 'redux/auth/authSelectors';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="box">
      <p className={s.email}>{user.email}</p>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
