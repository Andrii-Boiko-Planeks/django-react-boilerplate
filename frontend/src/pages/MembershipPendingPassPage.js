import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../assets/styles/MembershipDetailPage.css";
import {Link} from "react-router-dom";
import YouTubeVideo from "../components/YouTubeVideo";
import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import i18n from "../i18n";

export default function MembershipPaymentPassPage() {
    const {t} = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en';
        i18n.changeLanguage(savedLanguage);
    }, []);

    return (
        <main className="App-main">
            <div className="membership-details-pages">
                <Header/>
                <div className="sidebar-included-main-content">
                    <SideBar/>
                    <div className="membership-details-pages-main-info">
                        <YouTubeVideo/>
                    </div>
                </div>
                <div className="successfull-text">
                    <h2>
                        {t('The payment link has been sent to your phone')}!
                    </h2>
                </div>
                <div className="membership-details-pages-main-buttons">
                    <Link to="/homepage/">
                        <button className="change-club-button">{t('Homepage')}</button>
                    </Link>
                    <Link to="/log-out/">
                        <button className="change-club-button">{t('Log out')}</button>
                    </Link>
                </div>
            </div>
        </main>
    );
};
