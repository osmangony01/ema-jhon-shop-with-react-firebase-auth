
import React, { useContext } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                // navigate(from, {replace: true});
                navigate("/", {replace: true});
            
            })
            .catch(error => {
                console.log(error.message);
            })

        console.log(email, password);
    }

    return (
        <div className='login'>
            <h2 className='form-title'>Login</h2>
            <form action="" onSubmit={handleLogin}>
                <div className='mb'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" className='input-control' placeholder='' required />
                </div>
                <div className='mb'>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" className='input-control' placeholder='' required />
                </div>
                <button type="submit" className='btn-submit'>Login</button>
                <p className='account'>New to Ema-jhon? <Link to="/register">Create New Account</Link></p>
            </form>
        </div>
    );
};

export default Login;