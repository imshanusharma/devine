import React from 'react';
import './index.css';
import { SideBar } from '../../components/sidebar';
import { RightBar } from '../../components/rightbar';
import { LoginHeader } from '../../components/header';
import { Feed } from '../../components/feed';

import cover from '../../assets/post/3.jpeg';

export const Profile = () => {
    return (
        <div>
            <LoginHeader />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                src={cover}
                                alt=""
                                className="profileCoverImg"
                            />
                            <img
                                src={cover}
                                alt=""
                                className="profileUserImg"
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Shanu Sharma</h4>
                            <span className="profileInfoDesc">
                                Hello My Friends
                            </span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightBar profile />
                    </div>
                </div>
            </div>
        </div>
    );
};
