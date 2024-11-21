import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../assets/styles/MembershipDetailPage.css";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import i18n from "../i18n";

export default function ChangeHomeClubPage() {
    const clubs = ["Club A", "Club B", "Club C", "Club D"];
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
                            {t('Change Home Club')}
                        </h2>
                        <div className="membership-details-pages-main-info-text">
                            <p>{t('You can change your home club only once a year')}!</p>
                            <p>{t('Plus members have access to all clubs')}</p>
                            <p>{t('Membership Type')}: [Flex/Core/Plus]</p>
                            <p>{t('Current Home Club')}:</p>
                            <p>{t('Change Home Club')}:</p>
                        </div>

                        <select className="club-select">
                            {clubs.map((club, index) => (
                                <option key={index} value={club}>
                                    {club}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="membership-details-pages-main-buttons">
                    <button className="change-club-button">{t('Change Home Club')}</button>
                </div>
            </div>
        </main>
    );
};
