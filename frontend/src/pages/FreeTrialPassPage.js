import Header from "../components/Header";
import React from "react";
import {t} from "i18next";
import "../assets/styles/FreeTrialPassPage.css"
import YouTubeVideo from "../components/YouTubeVideo";


function FreeTrialPassPage() {
    return (
        <div className="App">
            <Header/>
            <main className="App-main">
                <YouTubeVideo/>
                <div className="free-trial-pass-page-text-detail">
                    <p>{t('Please check your phone and email to see more details about your free trial.')}</p>
                </div>
            </main>
        </div>
    );
}

export default FreeTrialPassPage;
