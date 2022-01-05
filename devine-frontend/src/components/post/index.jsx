import './index.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import love from '../../assets/heart.png';
import noAvatar from '../../assets/People/noAvatar.png';
import { MoreVert } from '@material-ui/icons';

import axios from 'axios';
import { format } from 'timeago.js';

const Post = ({ post }) => {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(
                `http://localhost:8800/api/users?userId=${post.userId}`
            );
            setUser(res.data);
        };
        fetchUser();
    }, [post.userId]);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user.username}`}>
                            <img
                                className="postProfileImg"
                                src={user.profilePicture || noAvatar}
                                alt="img"
                            />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">
                            {format(post.createdAt)}
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.img} alt=""></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img
                            className="likeIcon"
                            src={love}
                            alt=""
                            onClick={likeHandler}
                        />
                        <span className="postLikeCounter">{like} likes</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {post.comment} Comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
