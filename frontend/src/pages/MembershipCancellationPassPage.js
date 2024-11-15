import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {Link} from "react-router-dom";
import React from "react";

export default function MembershipCancellationPassPage () {
    return (
        <main className="App-main">
            <div className="membership-details-pages">
                <Header/>
                <div className="sidebar-included-main-content">
                    <SideBar/>
                    <div className="membership-details-pages-main-info">
                        <h2 className="membership-details-pages-main-info-title">
                            Membership Cancelled Successfully!
                        </h2>
                    </div>
                </div>
                <div className="successfull-text">

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
