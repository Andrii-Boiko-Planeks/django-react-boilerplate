import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import '../assets/styles/MemberPage.css';
import i18n from '../i18n';
import Header from "../components/Header";

function MemberPage() {
    const {t} = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en';
        i18n.changeLanguage(savedLanguage);
    }, []);

    return (
        <div className="App">
            <Header/>
            <header className="App-header">
                <div className="video-container">
                    <svg width="479" height="399" viewBox="0 0 479 399" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.5" y="2.5" width="474" height="394" rx="32.5" stroke="black" stroke-width="5"/>
                        <line y1="346.5" x2="479" y2="346.5" stroke="black" stroke-width="5"/>
                        <circle cx="48.5" cy="348.5" r="11.5" fill="black"/>
                        <path d="M201 140.119L287.662 187.5L201 234.881V140.119Z" stroke="black" stroke-width="8"/>
                    </svg>
                </div>
                <h1 className="memberships-title">{t('Welcome! What do you want to do today?')}</h1>
                <div className="buttons-container">
                    <Link to="">
                        <button className="main-button">{t('My membership')}</button>
                    </Link>
                    <Link to="">
                        <button className="main-button">{t('Payments')}</button>
                    </Link>
                    <Link to="">
                        <button className="main-button">{t('Refer a Buddy')}</button>
                    </Link>
                    <Link to="">
                        <button className="main-button">{t('Upgrade/Add ons')}</button>
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default MemberPage;
