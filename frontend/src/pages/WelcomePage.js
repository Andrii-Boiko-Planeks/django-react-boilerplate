import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import '../assets/styles/HomePage.css';
import i18n from '../i18n';

export default function WelcomePage() {
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
                    <Link to="/homepage/">
                        <button className="main-button">{t('Click to Start!')}</button>
                    </Link>
                </div>
            </header>
        </div>
    );
}
