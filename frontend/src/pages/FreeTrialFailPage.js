import Header from "../components/Header";
import React from "react";
import {t} from "i18next";
import "../assets/styles/FreeTrialFailPage.css"


function FreeTrialFailPage() {
    return (
        <div className="App">
            <Header/>
            <main className="App-main">
                <div className="video-container">
                    <svg width="479" height="399" viewBox="0 0 479 399" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.5" y="2.5" width="474" height="394" rx="32.5" stroke="black" strokeWidth="5"/>
                        <line y1="346.5" x2="479" y2="346.5" stroke="black" strokeWidth="5"/>
                        <circle cx="48.5" cy="348.5" r="11.5" fill="black"/>
                        <path d="M201 140.119L287.662 187.5L201 234.881V140.119Z" stroke="black" strokeWidth="8"/>
                    </svg>
                </div>

                <div className="free-trial-fail-page-text-detail">
                    <p>{t('You are not eligible for a free trial! Please contact the reception to know more.')}</p>
                </div>
            </main>
        </div>
    );
}

export default FreeTrialFailPage;
