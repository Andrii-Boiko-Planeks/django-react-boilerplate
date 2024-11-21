import {Component} from "react";
import {Outlet} from "react-router-dom";
import {Navigation} from "./Navigation";
import AutoLogout from "../AutoLogout";
import i18n from "i18next";
import "../App.css";

export class Layout extends Component {
    componentDidMount() {
        this.updateRTLDirection();
        i18n.on('languageChanged', this.updateRTLDirection);
    }

    componentWillUnmount() {
        i18n.off('languageChanged', this.updateRTLDirection);
    }

    updateRTLDirection = () => {
        const isRTL = i18n.language === "ar";
        document.documentElement.dir = isRTL ? "rtl" : "ltr";
        document.documentElement.lang = i18n.language;

        if (isRTL) {
            document.body.classList.add('rtl');
        } else {
            document.body.classList.remove('rtl');
        }
    }

    render() {
        const isRTL = i18n.language === "ar";

        return (
            <div className={`App ${isRTL ? "rtl" : ""}`}>
                <AutoLogout/>
                {/*<Navigation />*/}
                <div className="container">
                    <Outlet/>
                </div>
            </div>
        );
    }
}
