import Header from "../components/Header";
import SideBar from "../components/SideBar";
import React, {useState, useEffect, useRef} from "react";
import "react-simple-keyboard/build/css/index.css";
import i18n from "../i18n";
import {useTranslation} from "react-i18next";

export default function MembershipFreezePage() {
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
                        <h2 className="membership-details-pages-main-info-title">
                            {t('Membership Payment')}!
                        </h2>
                        <div className="membership-details-pages-main-info-text">
                            <h3>{t('Hello')} First Name,</h3>
                            <h3>{t('Here are your payment details')}:</h3>
                            <p>{t('Membership Name')}: [plus/core/flex]</p>
                            <p>{t('Next payment date')}: [dd/mm/yyyy]</p>
                            <p>{t('Amount')}: [amt]</p>
                        </div>
                    </div>
                </div>
                <div className="membership-details-pages-main-buttons">
                    <button className="change-club-button">{t('Pay Now')}</button>
                </div>
            </div>
        </main>
    );
}
