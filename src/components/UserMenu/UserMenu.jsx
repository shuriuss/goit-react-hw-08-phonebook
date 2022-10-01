import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperation';
import {  selectUser } from 'redux/auth/authSelectors';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate()

  const handleclick = e => {
    dispatch(logOut())
    navigate("/", { replace: true })
  }

  return (
    <div className="box">
      <p className={s.email}>{user.email}</p>
      <button
        className={s.button}
        type="button"
        onClick={handleclick}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
