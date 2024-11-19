import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import '../assets/styles/HomePage.css';
import i18n from '../i18n';
import YouTubeVideo from "../components/YouTubeVideo";

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
                <YouTubeVideo/>
                <div className="buttons-container">
                    <Link to="/homepage/">
                        <button className="main-button">{t('Click to Start!')}</button>
                    </Link>
                </div>
            </header>
        </div>
    );
}
