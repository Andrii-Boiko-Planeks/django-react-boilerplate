import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {Link} from "react-router-dom";
import React from "react";

export default function MembershipPendingPage () {
    return (
        <main className="App-main">
            <div className="membership-details-pages">
                <Header/>
                <div className="sidebar-included-main-content">
                    <SideBar/>
                    <div className="membership-details-pages-main-info">
                        <h2 className="membership-details-pages-main-info-title">
                            Pending Payment!
                        </h2>
                        <svg width="444" height="380" viewBox="0 0 444 380" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect x="2.5" y="2.5" width="439" height="375" rx="32.5" stroke="black" stroke-width="5"/>
                            <line y1="329.881" x2="444" y2="329.881" stroke="black" stroke-width="5"/>
                            <ellipse cx="44.9562" cy="331.905" rx="10.6597" ry="10.9524" fill="black"/>
                            <path d="M186.605 133.857L266.204 178.572L186.605 223.286V133.857Z" stroke="black"
                                  stroke-width="8"/>
                        </svg>
                    </div>
                </div>
                <div className="successfull-text">
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
