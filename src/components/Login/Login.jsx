
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pasword = form.password.value;
    }

    return (
        <div className='login'>
            <h2 className='form-title'>Login</h2>
            <form action="" onSubmit={handleLogin}>
                <div className='mb'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" className='input-control' placeholder='' required/>
                </div>
                <div className='mb'>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" className='input-control' placeholder='' required/>
                </div>
                <button type="submit" className='btn-submit'>Login</button>
                <p className='account'>New to Ema-jhon? <Link to="/register">Create New Account</Link></p>
            </form>
        </div>
    );
};

export default Login;