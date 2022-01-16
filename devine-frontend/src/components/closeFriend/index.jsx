import React from 'react';
import './index.css';
export const CloseFriend = ({ user }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
            <li className="sidebarFriend">
                <img
                    className="sidebarFriendImg"
                    src={
                        user.profilePicture
                            ? PF + user.profilePicture
                            : PF + 'person/noAvatar.png'
                    }
                    alt=""
                ></img>
                <span className="sidebarFriendName">{user.username}</span>
            </li>
        </div>
    );
};
