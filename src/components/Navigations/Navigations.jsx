import s from './Navigations.module.css';

const { NavLink } = require('react-router-dom');

const Navigations = () => {

  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  return (
    <nav>
      <NavLink className={getActiveClassName} to="/" end>
        Register
      </NavLink>
      <NavLink className={getActiveClassName} to="/login">
        Login
      </NavLink>
      {/* {token && (
        <NavLink className={getActiveClassName} to="/contacts">
          Contacts
        </NavLink> */}
      {/* )} */}
    </nav>
  );
};

export default Navigations;
