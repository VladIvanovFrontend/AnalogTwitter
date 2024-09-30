import React, { useState } from 'react';
import PanelRegistration from './panel_registration.jsx';
import PanelEntry from "./panel_entry.jsx";
import classes from "./panel_unauth.module.css";

const PanelUnauth = ({ onLoginSuccess }) => {
    const [activePanel, setActivePanel] = useState(null);

    const handleRegisterClick = () => {
        setActivePanel('register');
    };

    const handleLoginClick = () => {
        setActivePanel('login');
    };

    const handleBack = () => {
        setActivePanel(null);
    };

    return (
        <aside className={classes.container}>
            <div className={classes.container}>
            {!activePanel ? (
                <>
                    <button className={classes.unauth__button} onClick={handleLoginClick}>
                        Вход
                    </button>
                    <button className={classes.unauth__button} onClick={handleRegisterClick}>
                        Регистрация
                    </button>
                </>
            ) : activePanel === 'register' ? (
                <PanelRegistration onRegisterSuccess={handleBack} onBack={handleBack}/>
            ) : (
                <PanelEntry onLoginSuccess={onLoginSuccess} onBack={handleBack} />
            )}
            </div>
        </aside>
    );
};

export default PanelUnauth;
