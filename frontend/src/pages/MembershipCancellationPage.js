import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import i18n from "../i18n";

export default function MembershipCancellationPage () {
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
                            <p>{t('You are within your commitment period')}!</p>
                            <p>{t('Your commitment period lasts until')} [dd/mm/yyyy]</p>
                            <p>{t('Please remember that you can only cancel your membership for the following reasons')}:</p>
                            <ul>
                                <li>reason 1</li>
                                <li>reason 2</li>
                                <li>reason 3</li>
                                <li>reason 4</li>
                            </ul>
                            <p>{t('Please contact the reception for further action')}</p>
                        </div>
                    </div>
                </div>
                <div className="successfull-text">

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
