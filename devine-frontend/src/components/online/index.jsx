import React from 'react';
import './index.css';
export const Online = ({ user }) => {
    return (
        <div>
            <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <img
                        src={user.profilePicture}
                        alt=""
                        className="rightbarProfileImg"
                    />
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">{user.username}</span>
            </li>
        </div>
    );
};
