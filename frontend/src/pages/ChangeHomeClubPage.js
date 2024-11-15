import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../assets/styles/MembershipDetailPage.css";

export default function ChangeHomeClubPage() {
    const clubs = ["Club A", "Club B", "Club C", "Club D"];

    return (
        <main className="App-main">
            <div className="membership-details-pages">
                <Header/>
                <div className="sidebar-included-main-content">
                    <SideBar/>
                    <div className="membership-details-pages-main-info">
                        <h2 className="membership-details-pages-main-info-title">
                            Change Home Club
                        </h2>
                        <div className="membership-details-pages-main-info-text">
                            <p>You can change your home club only once a year!</p>
                            <p>Plus members have access to all clubs</p>
                            <p>Membership Type: [Flex/Core/Plus]</p>
                            <p>Current Home Club:</p>
                            <p>Change Home Club:</p>
                        </div>

                        <select className="club-select">
                            {clubs.map((club, index) => (
                                <option key={index} value={club}>
                                    {club}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="membership-details-pages-main-buttons">
                    <button className="change-club-button">Change Home Club</button>
                </div>
            </div>
        </main>
    );
};
