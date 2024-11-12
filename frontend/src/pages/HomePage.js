import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import '../assets/styles/HomePage.css';
import i18n from '../i18n';

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
                <div className="video-container">
                    <svg width="479" height="399" viewBox="0 0 479 399" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.5" y="2.5" width="474" height="394" rx="32.5" stroke="black" stroke-width="5"/>
                        <line y1="346.5" x2="479" y2="346.5" stroke="black" stroke-width="5"/>
                        <circle cx="48.5" cy="348.5" r="11.5" fill="black"/>
                        <path d="M201 140.119L287.662 187.5L201 234.881V140.119Z" stroke="black" stroke-width="8"/>
                    </svg>
                </div>
                <div className="buttons-container">
                    <button className="main-button">{t('Join now')}</button>
                    <Link to="/login/">
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
