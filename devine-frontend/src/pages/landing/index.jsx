import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { LandingHeader } from '../../components/header';
export const Landing = () => {
    return (
        <div>
            <LandingHeader />
            <Router>
                <section className="landing">
                    <div className="dark-overlay">
                        <div className="landing-inner">
                            <h1 className="x-large">Connecting Developers</h1>

                            <p className="lead">
                                Create developer profile/portfolio, share posts
                                and interact with other developers
                            </p>

                            <div className="buttons">
                                <Link
                                    to="/register"
                                    className="btn btn-primary"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Router>
        </div>
    );
};

export default Landing;
