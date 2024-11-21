import Header from "../components/Header";
import React, {useEffect} from "react";
import "../assets/styles/FreeTrialPassPage.css"
import YouTubeVideo from "../components/YouTubeVideo";
import {useTranslation} from "react-i18next";
import i18n from "../i18n";


function FreeTrialPassPage() {
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
                <div className="free-trial-pass-page-text-detail">
                    <p>{t('Please check your phone and email to see more details about your free trial')}.</p>
                </div>
            </main>
        </div>
    );
}

export default FreeTrialPassPage;
