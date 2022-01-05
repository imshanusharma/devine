import React, { useState, useEffect } from 'react';
import './index.css';
import Share from '../shared';
import Post from '../post';
import axios from 'axios';
export const Feed = ({ username }) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
                ? await axios.get(
                      'http://localhost:8800/api/posts/profile/' + username
                  )
                : await axios.get(
                      'http://localhost:8800/api/posts/timeline/61d44d3fbf8681ba37d3c11b'
                  );
            setPosts(res.data);
        };
        fetchPosts();
    }, [username]);
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                <h2 className="feedPostHeading">Posts</h2>
                {posts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    );
};
