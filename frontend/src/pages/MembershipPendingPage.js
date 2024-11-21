import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import YouTubeVideo from "../components/YouTubeVideo";
import {useTranslation} from "react-i18next";
import i18n from "../i18n";

export default function MembershipPendingPage () {
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
                    <h2 className="membership-details-pages-main-info-title">
                        {t('Pending Payment')}!
                    </h2>
                    <p>{t('It seems like you have some pending payments')}!</p>
                    <p>{t('Membership Name')}: [plus/core/flex]</p>
                    <p>{t('Payment Due Date')}: [dd/mm/yyyy]</p>
                    <p>{t('Amount')}: [amt]</p>
                </div>
                <div className="membership-details-pages-main-buttons">
                    <button className="change-club-button">{t('Pay Now')}!</button>
                </div>
            </div>
        </main>
    );
};
