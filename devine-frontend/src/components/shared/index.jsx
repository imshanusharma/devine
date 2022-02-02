import React from 'react';
import './index.css';
import { Room, Announcement, AddAPhoto } from '@material-ui/icons';
import { useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { useRef } from 'react';
import axios from 'axios';

const Share = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);
    const desc = useRef();
    const [file, setFile] = useState(null);
    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newPost.img = filename;
            try {
                await axios.post('http://localhost:8800/api/upload', data);
            } catch (err) {
                console.log(err);
            }
        }
        fetch('http://localhost:8800/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        }).then((response) => {
            if (response.ok) {
                window.location.reload();
            }
            return response.json();
        });
        // try {
        //     await axios.post('http://localhost:8800/api/posts', newPost);
        //     window.location.reload();
        // } catch (err) {
        //     console.log(err);
        // }
    };
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        className="shareProfileImg"
                        src={PF + 'person/noAvatar.png'}
                        alt="img"
                    ></img>
                    <input
                        placeholder="Want to share something?"
                        className="shareInput"
                        ref={desc}
                    />
                </div>
                <hr className="shareHr" />
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <AddAPhoto
                                htmlColor="tomato"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">
                                Upload Photo
                            </span>
                            <input
                                style={{ display: 'none' }}
                                type="file"
                                id="file"
                                accept=".jpeg, .jpg, .png"
                                onChange={(e) => setFile(e.target.files[0])}
                            ></input>
                        </label>
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
                    <button type="submit" className="shareButton">
                        Share
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Share;
