import React from 'react';
import './index.css';
import { AddAPhoto, Cancel } from '@material-ui/icons';
import { useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to={`/profile/${user.username}`}>
                        <img
                            className="shareProfileImg"
                            src={PF + 'person/noAvatar.png'}
                            alt="img"
                        ></img>
                    </Link>
                    <input
                        placeholder={`Want to share something ${user.username} ?`}
                        className="shareInput"
                        ref={desc}
                    />
                </div>
                <hr className="shareHr" />
                {file && (
                    <div className="shareImgContainer">
                        <img
                            src={URL.createObjectURL(file)}
                            alt=""
                            className="shareImg"
                        />
                        <Cancel
                            className="shareCancelImg"
                            onClick={() => setFile(null)}
                        />
                    </div>
                )}
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
