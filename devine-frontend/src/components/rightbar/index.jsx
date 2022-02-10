import React from 'react';
import './index.css';
import { Users } from '../../dummyData';
import { Online } from '../../components/online';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
export const RightBar = ({ user }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [followed, setFollowed] = useState(false);
    useEffect(() => {
        setFollowed(currentUser.followings.includes(user?._id));
    }, [currentUser, user]);
    const handleClick = async () => {
        try {
            if (followed) {
                await axios.put(
                    'http://localhost:8800/api/users/' + user._id + '/unfollow',
                    { userId: currentUser._id }
                );
                dispatch({ type: 'UNFOLLOW', payload: user._id });
            } else {
                await axios.put(
                    'http://localhost:8800/api/users/' + user._id + '/follow',
                    { userId: currentUser._id }
                );
                dispatch({ type: 'FOLLOW', payload: user._id });
            }
        } catch (err) {
            console.log(err);
        }
        setFollowed(!followed);
    };
    const HomeRightbar = () => {
        return (
            <div>
                <img src={PF + 'ad.png'} alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online People</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        );
    };

    const ProfileRightbar = () => {
        return (
            <div>
                {user.username !== currentUser.username && (
                    <button
                        className="rightbarFollowButton"
                        onClick={handleClick}
                    >
                        {followed ? 'Unfollow' : 'Follow'}
                        {followed ? <Remove /> : <Add />}
                    </button>
                )}
                <div className="rightbarInfo">
                    <h4 className="rightbarTitle">User Information</h4>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City : </span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From : </span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Profession : </span>
                        <span className="rightbarInfoValue">
                            {user.profession}
                        </span>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
};
