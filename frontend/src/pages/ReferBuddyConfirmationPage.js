import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../assets/styles/MembershipDetailPage.css";
import {Link} from "react-router-dom";
import YouTubeVideo from "../components/YouTubeVideo";
import React from "react";

export default function ReferBuddyConfirmationPage() {
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
                        Buddy Referral Successful!
                    </h2>
                </div>
                <div className="membership-details-pages-main-buttons">
                    <Link to="/homepage/">
                        <button className="change-club-button">Homepage</button>
                    </Link>
                    <Link to="/log-out/">
                        <button className="change-club-button">Log out</button>
                    </Link>
                </div>
            </div>
        </main>
    );
};
