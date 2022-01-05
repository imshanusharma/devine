import React from 'react';
import './index.css';
import { Room, Announcement, AddAPhoto } from '@material-ui/icons';
import noAvatar from '../../assets/People/noAvatar.png';

const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        className="shareProfileImg"
                        src={noAvatar}
                        alt="img"
                    ></img>
                    <input
                        placeholder="What to share something?"
                        className="shareInput"
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <AddAPhoto
                                htmlColor="tomato"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">
                                Upload Photo
                            </span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">
                                Share Location
                            </span>
                        </div>
                        <div className="shareOption">
                            <Announcement
                                htmlColor="goldenrod"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">
                                Announcement
                            </span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
};

export default Share;
