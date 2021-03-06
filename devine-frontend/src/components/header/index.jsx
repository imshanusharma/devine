import React, { useRef } from 'react';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import { Search } from '@material-ui/icons';

export const LoginHeader = () => {
    const username = useRef();
    const navigate = useNavigate();
    const search = () => {
        navigate(`/profile/${username.current.value}`);
    };
    const logout = () => {
        localStorage.clear();
        window.location = '/';
    };
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span className="logo">Devine &lt;/&gt;</span>
                </Link>
            </div>
            <div className="navbarCenter">
                <form onSubmit={search}>
                    <div className="searchbar">
                        <Search className="searchIcon" />
                        <input
                            placeholder="Search for Developers, posts or events"
                            className="searchInput"
                            ref={username}
                        />
                    </div>
                </form>
            </div>
            <div className="navbarRight">
                <ul className="navbarRightClick">
                    <li className="navbarRightAbout">About</li>
                </ul>
                <ul className="navbarRightClick">
                    <li className="navbarRightTimeline">Timeline</li>
                </ul>
                <ul className="navbarRightClick">
                    <li
                        className="navbarRightLogout"
                        onClick={logout}
                        style={{ cursor: 'pointer' }}
                    >
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    );
};

export const LandingHeader = () => {
    return (
        <Router>
            <nav className="navbar bg-dark">
                <h1>
                    <Link to="/">
                        <i className="fas fa-code-branch" /> Devine
                    </Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/profiles">Developers</Link>
                    </li>

                    <li>
                        <Link to="/register">Register</Link>
                    </li>

                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </Router>
    );
};
