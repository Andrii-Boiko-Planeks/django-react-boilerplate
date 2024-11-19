import Header from "../components/Header";
import React from "react";
import {t} from "i18next";
import "../assets/styles/FreeTrialFailPage.css"
import YouTubeVideo from "../components/YouTubeVideo";


function FreeTrialFailPage() {
    return (
        <div className="App">
            <Header/>
            <main className="App-main">
                <YouTubeVideo/>
                <div className="free-trial-fail-page-text-detail">
                    <p>{t('You are not eligible for a free trial! Please contact the reception to know more.')}</p>
                </div>
            </main>
        </div>
    );
}

export default FreeTrialFailPage;
