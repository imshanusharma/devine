import React from 'react';
import './index.css';
import { SideBar } from '../../components/sidebar';
import { RightBar } from '../../components/rightbar';
import { LoginHeader } from '../../components/header';
import { Feed } from '../../components/feed';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user2, setUser] = useState({});
    const username = useParams().username;
    const { user } = useContext(AuthContext);
    try {
        useEffect(() => {
            const fetchUser = async () => {
                const res = await axios.get(
                    `http://localhost:8800/api/users?username=${username}`
                );
                setUser(res.data);
            };
            fetchUser();
        }, [username, user.username]);
    } catch (err) {
        window.location = '/';
    }
    return (
        <div>
            <LoginHeader />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                src={
                                    user2.coverPicture
                                        ? PF + user2.coverPicture
                                        : PF + 'person/noCover.png'
                                }
                                alt=""
                                className="profileCoverImg"
                            />
                            <img
                                src={
                                    user2.profilePicture
                                        ? PF + user2.profilePicture
                                        : PF + 'person/noAvatar.png'
                                }
                                alt=""
                                className="profileUserImg"
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">
                                {user2.username || 'USER NOT EXISTS'}
                            </h4>
                            <span className="profileInfoDesc">
                                {user2.desc}
                            </span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <RightBar user={user2} />
                    </div>
                </div>
            </div>
        </div>
    );
};
