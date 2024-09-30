import React, { useState } from 'react';
import AuthPanel from "./UI/Panel/panel_auth.jsx";
import PanelUnauth from "./UI/Panel/panel_unauth.jsx";
import Panel_popPost from "./UI/Panel/panel_popPost.jsx";

const MainContainer = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [posts, setPosts] = useState([]);

    const handleLoginSuccess = (user) => {
        setLoggedInUser(user);
    };

    const handleLogout = () => {
        setLoggedInUser(null);
    };

    const handlePostSubmit = (postText) => {
        const newPost = {
            id: posts.length + 1,
            userName: loggedInUser.username,
            postText,
        };
        setPosts([newPost, ...posts]);
    };

    return (
        <main>
            {loggedInUser ? (
                <>
                    <AuthPanel
                        user={loggedInUser}
                        onLogout={handleLogout}
                        onPostSubmit={handlePostSubmit}
                    />
                    <Panel_popPost />
                </>
            ) : (
                <PanelUnauth onLoginSuccess={handleLoginSuccess} />
            )}
        </main>
    );
};

export default MainContainer;
