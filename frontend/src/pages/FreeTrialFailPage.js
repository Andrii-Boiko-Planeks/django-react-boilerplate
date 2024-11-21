import Header from "../components/Header";
import React, {useEffect} from "react";
import "../assets/styles/FreeTrialFailPage.css"
import YouTubeVideo from "../components/YouTubeVideo";
import {useTranslation} from "react-i18next";
import i18n from "../i18n";


function FreeTrialFailPage() {
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
                <div className="free-trial-fail-page-text-detail">
                    <p>{t('You are not eligible for a free trial! Please contact the reception to know more')}.</p>
                </div>
            </main>
        </div>
    );
}

export default FreeTrialFailPage;
