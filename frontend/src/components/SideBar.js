import "../assets/styles/SideBar.css";
import {Link} from "react-router-dom";
import i18n from "../i18n";

export default function SideBar() {
    const {t} = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en';
        i18n.changeLanguage(savedLanguage);
    }, []);

    return (
        <div className="sidebar-container">
            <div className="sidebar-container-title">
                <h4>{t('My membership')}</h4>
            </div>
            <div className="sidebar-container-buttons">
                <ul>
                    <Link to="/my-membership">
                        <li>{t('My Membership')}</li>
                    </Link>
                    <Link to="/update-details">
                        <li>{t('Update Details')}</li>
                    </Link>
                    <Link to="/freeze-membership">
                        <li>{t('Freeze Membership')}</li>
                    </Link>
                    <Link to="/membership-cencellaation">
                        <li>{t('Membership Cancellation')}</li>
                    </Link>
                    <Link to="/change-home-club">
                        <li>{t('Change Home Club')}</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
