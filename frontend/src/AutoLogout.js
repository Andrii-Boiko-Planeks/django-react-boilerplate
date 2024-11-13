import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "./assets/styles/AutoLogout.css"

function AutoLogout() {
    const navigate = useNavigate();
    const [isInactive, setIsInactive] = useState(false);
    const [timer, setTimer] = useState(null);
    const [logoutTimer, setLogoutTimer] = useState(null);

    useEffect(() => {
        const handleActivity = () => {
            clearTimeout(timer);
            clearTimeout(logoutTimer);
            setIsInactive(false);
            const newTimer = setTimeout(() => {
                setIsInactive(true);
            }, 3 * 60 * 1000);
            setTimer(newTimer);
        };

        const resetTimer = () => {
            handleActivity();
        };

        window.addEventListener('mousemove', resetTimer);
        window.addEventListener('keydown', resetTimer);

        return () => {
            clearTimeout(timer);
            clearTimeout(logoutTimer);
            window.removeEventListener('mousemove', resetTimer);
            window.removeEventListener('keydown', resetTimer);
        };
    }, [timer, logoutTimer]);

    const handleLogout = () => {
        navigate("/login");
    };

    const handleStayLoggedIn = () => {
        setIsInactive(false);
        clearTimeout(logoutTimer);
    };

    useEffect(() => {
        if (isInactive) {
            const newLogoutTimer = setTimeout(() => {
                handleLogout();
            }, 1 * 60 * 1000);
            setLogoutTimer(newLogoutTimer);
        }

        return () => {
            clearTimeout(logoutTimer);
        };
    }, [isInactive, logoutTimer]);

    return (
        <>
            {isInactive && (
                <div className="timeout-overlay">
                    <div className="timeout-popup">
                        <p>Your session is about to expire. Do you want to stay logged in?</p>
                        <div className="button-container">
                            <button className="stay-logged-in-button" onClick={handleStayLoggedIn}>
                                Stay Logged In
                            </button>
                            <button className="logout-button" onClick={handleLogout}>
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
}

export default AutoLogout;
