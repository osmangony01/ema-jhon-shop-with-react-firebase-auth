
import './header.css';
import ActiveLink from '../ActiveLink/ActiveLink';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))

    }

    return (
        <div className='header'>
            <div>
                <ActiveLink to="/"><img src="./images/Logo.svg" alt="" /></ActiveLink>
            </div>
            <div className='nav-link'>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/order">Order</ActiveLink>
                <ActiveLink to="/order-review">Manage Order</ActiveLink>
                {/* <ActiveLink to="/inventory">Inventory</ActiveLink> */}
                {!user && <ActiveLink to="/login">Login</ActiveLink>}
                {!user && <ActiveLink to="/register">Sign Up</ActiveLink>}
                {user && <ActiveLink to="/profile">Profile</ActiveLink>}
                {
                    user && <><span className="user">{user.email}</span> <button className='' onClick={handleLogout}>Sign Out</button></>

                }
            </div>
        </div>
    );
};

export default Header;