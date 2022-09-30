import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { selectToken, selectUser } from 'redux/auth/authSelectors';


const UserMenu = ()=> {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    console.log(user.email);
    return (
        <div>
            <p>{user.email}</p>
            <button type="button" onClick={()=>dispatch(logOut())}>Logout</button>
        </div>
    )
}

export default UserMenu