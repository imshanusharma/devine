import './index.css';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Cancel } from '@material-ui/icons';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { format } from 'timeago.js';

const Post = ({ post }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [userr, setUser] = useState({});
    const { user } = useContext(AuthContext);

    useEffect(() => {
        setIsLiked(post.likes.includes(user._id));
    }, [user._id, post.likes]);
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
        try {
            axios.put('http://localhost:8800/api/posts/' + post._id + '/like', {
                userId: user._id,
            });
        } catch (err) {}
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };
    const deleteHandle = async (e) => {
        e.preventDefault();
        const confirmBox = window.confirm('Are you sure you want to delete?');
        if (confirmBox === true) {
            try {
                await axios.delete(
                    `http://localhost:8800/api/posts/${post._id}`
                );
                window.location.reload();
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${userr.username}`}>
                            <img
                                className="postProfileImg"
                                src={
                                    user.profilePicture
                                        ? PF + userr.profilePicture
                                        : PF + 'person/noAvatar.png'
                                }
                                alt="img"
                            />
                        </Link>
                        <span className="postUsername">{userr.username}</span>
                        <span className="postDate">
                            {format(post.createdAt)}
                        </span>
                    </div>
                    <div className="postTopRight">
                        {post.userId === user._id ? (
                            <Cancel
                                onClick={deleteHandle}
                                style={{ cursor: 'pointer' }}
                            />
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={PF + post.img} alt=""></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img
                            className="likeIcon"
                            src={PF + 'heart.png'}
                            alt=""
                            onClick={likeHandler}
                        />
                        <span className="postLikeCounter">{like} likes</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
