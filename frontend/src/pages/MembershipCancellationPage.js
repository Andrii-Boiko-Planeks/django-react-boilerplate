import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {Link} from "react-router-dom";
import React from "react";

export default function MembershipCancellationPage () {
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
                            <p>You are within your commitment period!</p>
                            <p>Your commitment period lasts until [dd/mm/yyyy]</p>
                            <p>Please remember that you can only cancel your membership for the following reasons:</p>
                            <ul>
                                <li>reason 1</li>
                                <li>reason 2</li>
                                <li>reason 3</li>
                                <li>reason 4</li>
                            </ul>
                            <p>Please contact the reception for further action</p>
                        </div>
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
