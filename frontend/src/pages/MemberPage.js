import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import '../assets/styles/MemberPage.css';
import i18n from '../i18n';
import Header from "../components/Header";
import YouTubeVideo from "../components/YouTubeVideo";

export default function MemberPage() {
    const {t} = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en';
        i18n.changeLanguage(savedLanguage);
    }, []);

    return (
        <div className="App">
            <Header/>
            <main className="App-main">
                <YouTubeVideo/>
                <h1 className="memberships-title">{t('Welcome! What do you want to do today?')}</h1>
                <div className="buttons-container">
                    <Link to="/my-membership/">
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
            </main>
        </div>
    );
}
