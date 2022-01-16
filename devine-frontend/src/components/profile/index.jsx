import React from 'react';
import './index.css';
import { SideBar } from '../../components/sidebar';
import { RightBar } from '../../components/rightbar';
import { LoginHeader } from '../../components/header';
import { Feed } from '../../components/feed';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(
                `http://localhost:8800/api/users?username=${username}`
            );
            setUser(res.data);
        };
        fetchUser();
    }, [username]);
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
                                    user.coverPicture
                                        ? PF + user.coverPicture
                                        : PF + 'person/noCover.png'
                                }
                                alt=""
                                className="profileCoverImg"
                            />
                            <img
                                src={
                                    user.profilePicture
                                        ? PF + user.profilePicture
                                        : PF + 'person/noAvatar.png'
                                }
                                alt=""
                                className="profileUserImg"
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <RightBar user={user} />
                    </div>
                </div>
            </div>
        </div>
    );
};
