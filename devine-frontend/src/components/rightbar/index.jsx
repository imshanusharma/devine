import React from 'react';
import './index.css';
import { Users } from '../../dummyData';
import { Online } from '../../components/online';
export const RightBar = ({ user }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img
                            src={PF + '/person/noAvatar.png'}
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">Shanu</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src={PF + '/person/noAvatar.png'}
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">Shanu</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src={PF + '/person/noAvatar.png'}
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">Shanu</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src={PF + '/person/noAvatar.png'}
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">Shanu</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src={PF + '/person/noAvatar.png'}
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">Shanu</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src={PF + '/person/noAvatar.png'}
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">Shanu</span>
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
