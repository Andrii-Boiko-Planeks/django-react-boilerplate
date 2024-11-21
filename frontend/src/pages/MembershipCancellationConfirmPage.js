import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import i18n from "../i18n";

export default function MembershipCancellationConfirmPage () {
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
                            {t('Membership Cancellation')}
                        </h2>
                        <div className="membership-details-pages-main-info-text">
                            <p>{t('Your contract is past it’s commitment period. There’s a 30 day notice for cancellation')}!</p>
                        </div>
                    </div>
                </div>
                <div className="successfull-text">

                </div>
                <div className="membership-details-pages-main-buttons">
                    <button className="change-club-button">{t('Submit')}</button>
                </div>
            </div>
        </main>
    );
};
