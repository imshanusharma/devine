import './index.css';
import { useRef } from 'react';
import { loginCall } from '../../apiCalls';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);
    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Devine &lt;/&gt;</h3>
                    <h2>Connect, Develop and Innovate with developers across the world.</h2>
                </div>
                <div className="loginLeft">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            placeholder="Email"
                            type="email"
                            required
                            className="loginInput"
                            ref={email}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            required
                            minLength="6"
                            className="loginInput"
                            ref={password}
                        />
                        <button
                            className="loginButton"
                            type="submit"
                            disabled={isFetching}
                        >
                            {isFetching ? (
                                <CircularProgress color="white" size="20px" />
                            ) : (
                                'Log In'
                            )}
                        </button>
                    

                        <button className="loginRegisterButton">
                            {isFetching ? (
                                <CircularProgress color="white" size="20px" />
                            ) : (
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                    }}
                                    to="/register"
                                >
                                    Create a New Account
                                </Link>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
