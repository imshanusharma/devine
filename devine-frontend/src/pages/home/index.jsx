import React from 'react';
import { SideBar } from '../../components/sidebar';
import { RightBar } from '../../components/rightbar';
import { LoginHeader } from '../../components/header';
import { Feed } from '../../components/feed';
const Home = () => {
    return (
        <div>
            <LoginHeader />
            <div className="homeContainer">
                <SideBar />
                <Feed />
                <RightBar />
            </div>
        </div>
    );
};

export default Home;
