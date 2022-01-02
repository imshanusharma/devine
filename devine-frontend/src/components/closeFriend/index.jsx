import React from 'react';
import './index.css';
export const CloseFriend = ({ user }) => {
    return (
        <div>
            <li className="sidebarFriend">
                <img
                    className="sidebarFriendImg"
                    src={user.profilePicture}
                    alt=""
                ></img>
                <span className="sidebarFriendName">{user.username}</span>
            </li>
        </div>
    );
};
