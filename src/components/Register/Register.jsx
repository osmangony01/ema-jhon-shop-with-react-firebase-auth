
import React, { useContext, useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Register = () => {
    const [error, setError] = useState("");
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        setError('');

        if (password.length < 6) {
            setError('At least 6 characters needed!!');
            return;
        }
        else if (password !== confirm_password) {
            setError("The password didn't match!!");
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUsed = result.user;
                console.log(loggedUsed);
                form.reset();
            })
            .catch(error => {
                console.log(error.message);
            })


        console.log(name, email, password);

    }


    return (

        <div className='register'>
            <h2 className='form-title'>Sign Up</h2>
            <form action="" onSubmit={handleRegister}>
                <div className='mb'>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" className='input-control' placeholder='' />
                </div>
                <div className='mb'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" className='input-control' placeholder='' required />
                </div>
                <div className='mb'>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" className='input-control' placeholder='' required />
                </div>
                <div className='mb'>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirm_password" className='input-control' placeholder='' required />
                </div>
                <button className='btn-submit'>Sign Up</button>
                <p className='account'>Already have an account? <Link to="/login">Login</Link></p>
            </form>
            <p className='or'>or</p>
            <div>
                <button className='btn-google'>Continue with Google</button>
            </div>
            <span>{error}</span>
        </div>
    );
};

export default Register;