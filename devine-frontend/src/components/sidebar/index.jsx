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
                        <a style={{"text-decoration" : "none", "color" : "black"}} rel='noreferrer' target='_blank' href='http://meet.google.com'><span className="sidebarListItemText">Organize Meet</span></a>
                    </li>
                    <li className="sidebarListItem">
                        <GroupAdd className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <a style={{"text-decoration" : "none", "color" : "black"}} rel='noreferrer' target='_blank' href='http://github.com/imshanusharma'><span className="sidebarListItemText">GitHub</span></a>
                    </li>
                    <li className="sidebarListItem">
                        <QuestionAnswer className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon" />
                        <a style={{"text-decoration" : "none", "color" : "black"}} rel='noreferrer' target='_blank' href='http://linkedin.com'><span className="sidebarListItemText">Jobs LinkedIn</span></a>
                    </li>
                    <li className="sidebarListItem">
                        <Code className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Developer Conferences
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <LibraryBooks className="sidebarIcon" />
                        <a style={{"text-decoration" : "none", "color" : "black"}} rel='noreferrer' target='_blank' href='http://www.coursera.com'><span className="sidebarListItemText">Courses</span></a>
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
