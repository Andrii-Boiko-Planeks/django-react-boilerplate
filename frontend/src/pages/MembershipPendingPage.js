import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {Link} from "react-router-dom";
import React from "react";
import YouTubeVideo from "../components/YouTubeVideo";

export default function MembershipPendingPage () {
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
                        Pending Payment!
                    </h2>
                    <p>It seems like you have some pending payments!</p>
                    <p>Membership Name: [plus/core/flex]</p>
                    <p>Payment Due Date: [dd/mm/yyyy]</p>
                    <p>Amount: [amt]</p>
                </div>
                <div className="membership-details-pages-main-buttons">
                    <button className="change-club-button">Pay Now!</button>
                </div>
            </div>
        </main>
    );
};
