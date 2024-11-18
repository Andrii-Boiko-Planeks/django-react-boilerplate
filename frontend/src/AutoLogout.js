import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "./assets/styles/AutoLogout.css";

function AutoLogout() {
    const navigate = useNavigate();
    const [isInactive, setIsInactive] = useState(false);
    const [timer, setTimer] = useState(null);
    const [logoutTimer, setLogoutTimer] = useState(null);
    const [countdown, setCountdown] = useState(30);

    useEffect(() => {
        const handleActivity = () => {
            clearTimeout(timer);
            clearTimeout(logoutTimer);
            setIsInactive(false);
            setCountdown(30);

            const newTimer = setTimeout(() => {
                setIsInactive(true);
            }, 1 * 60 * 1000);

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

    useEffect(() => {
        let countdownInterval;

        if (isInactive) {
            setCountdown(30);
            countdownInterval = setInterval(() => {
                setCountdown((prevCount) => {
                    if (prevCount <= 1) {
                        clearInterval(countdownInterval);
                        handleLogout();
                        return 0;
                    }
                    return prevCount - 1;
                });
            }, 1000);

            const newLogoutTimer = setTimeout(() => {
                handleLogout();
            }, 30 * 1000);

            setLogoutTimer(newLogoutTimer);
        }

        return () => {
            clearInterval(countdownInterval);
            clearTimeout(logoutTimer);
        };
    }, [isInactive]);

    const handleLogout = () => {
        clearTimeout(timer);
        clearTimeout(logoutTimer);
        setIsInactive(false);
        setCountdown(30);
        navigate("/homepage");
        localStorage.removeItem('token');
        sessionStorage.clear();
    };

    const handleStayLoggedIn = () => {
        setIsInactive(false);
        clearTimeout(logoutTimer);
        setCountdown(30);
    };

    return (
        <>
            {isInactive && (
                <div className="timeout-overlay">
                    <div className="timeout-popup">
                        <p>Your session is about to expire in {countdown} seconds.</p>
                        <p>Do you want to stay here?</p>
                        <div className="button-container">
                            <button
                                className="stay-logged-in-button"
                                onClick={handleStayLoggedIn}
                            >
                                Stay Logged In
                            </button>
                            <button
                                className="logout-button"
                                onClick={handleLogout}
                            >
                                Back to home page
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AutoLogout;
