import React, { useState, useEffect } from 'react';
import './index.css';
import Share from '../shared';
import Post from '../post';
import axios from 'axios';
export const Feed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(
                'http://localhost:8800/api/posts/timeline/619269a76d0e8e32f35928b7'
            );
            setPosts(res.data);
        };
        fetchPosts();
    }, []);
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    );
};
