import './index.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const email = useRef();
    const username = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const navigate = useNavigate();

    const clickHandle = async (e) => {
        e.preventDefault();
        if (confirmPassword.current.value !== password.current.value) {
            window.alert("Password don't match");
        } else {
            const user = {
                email: email.current.value,
                password: password.current.value,
                username: username.current.value,
            };
            try {
                await axios.post(
                    'http://localhost:8800/api/auth/register',
                    user
                );
                navigate('/login');
            } catch (err) {
                console.log(err);
            }
        }
    };
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft"></div>
                <div className="registerRight">
                    <h3 className="registerLogo">Devine</h3>
                    <form className="registerBox">
                        <input
                            placeholder="Username"
                            className="registerInput"
                            type="text"
                            required
                            ref={username}
                        />
                        <input
                            type="email"
                            required
                            placeholder="Email"
                            className="registerInput"
                            ref={email}
                        />
                        <input
                            type="password"
                            required
                            minLength="8"
                            placeholder="Password"
                            className="registerInput"
                            ref={password}
                        />
                        <input
                            type="password"
                            required
                            minLength="8"
                            placeholder="Confirm Password"
                            className="registerInput"
                            ref={confirmPassword}
                        />
                        <button
                            type="submit"
                            className="registerButton"
                            onClick={clickHandle}
                        >
                            Sign Up
                        </button>
                        <button className="RegisterButton">
                            Log into Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
