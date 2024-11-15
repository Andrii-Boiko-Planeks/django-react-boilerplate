import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {Link} from "react-router-dom";
import React from "react";

export default function MembershipCancellationConfirmPage () {
    return (
        <main className="App-main">
            <div className="membership-details-pages">
                <Header/>
                <div className="sidebar-included-main-content">
                    <SideBar/>
                    <div className="membership-details-pages-main-info">
                        <h2 className="membership-details-pages-main-info-title">
                            Membership Cancellation
                        </h2>
                        <div className="membership-details-pages-main-info-text">
                            <p>Your contract is past it’s commitment period. There’s a 30 day notice for cancellation!</p>
                        </div>
                    </div>
                </div>
                <div className="successfull-text">

                </div>
                <div className="membership-details-pages-main-buttons">
                    <button className="change-club-button">Submit</button>
                </div>
            </div>
        </main>
    );
};
