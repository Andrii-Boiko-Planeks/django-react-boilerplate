import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import '../assets/styles/HomePage.css';
import i18n from '../i18n';
import YouTubeVideo from "../components/YouTubeVideo";

function HomePage() {
    const {t} = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en';
        i18n.changeLanguage(savedLanguage);
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    return (
        <div className="App">
            <header className="App-header">
                <YouTubeVideo/>
                <div className="buttons-container">
                    <Link to="/join-now/">
                        <button className="main-button">{t('Join now')}</button>
                    </Link>
                    <Link to="/member/">
                        <button className="main-button">{t('Log in')}</button>
                    </Link>
                    <Link to="/free-trial/">
                        <button className="main-button">{t('Free Trial')}</button>
                    </Link>
                </div>
                <div className="language-buttons">
                    <button className="lang-button" onClick={() => changeLanguage('en')}>
                        English
                    </button>
                    <button className="lang-button" onClick={() => changeLanguage('ar')}>
                        العربية
                    </button>
                </div>
            </header>
        </div>
    );
}

export default HomePage;
