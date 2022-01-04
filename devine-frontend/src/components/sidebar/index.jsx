import React from 'react';
import {
    RssFeed,
    ChatBubble,
    VideoCall,
    GroupAdd,
    Bookmark,
    QuestionAnswer,
    Work,
    Code,
    LibraryBooks,
} from '@material-ui/icons';
import { Users } from '../../dummyData';
import './index.css';
import { CloseFriend } from '../closeFriend';
export const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubble className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoCall className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupAdd className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <QuestionAnswer className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Code className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Developer Conferences
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <LibraryBooks className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <br></br>
                <button className="btn btn-common">Show More</button>
                <hr className="sidebarHr"></hr>
                <ul className="sidebarFriendList">
                    {Users.map((u) => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    );
};
