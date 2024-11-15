import "../assets/styles/SideBar.css";
import {Link} from "react-router-dom";

export default function SideBar() {
    return (
        <div className="sidebar-container">
            <div className="sidebar-container-title">
                <h4>My membership</h4>
            </div>
            <div className="sidebar-container-buttons">
                <ul>
                    <Link to="/my-membership">
                        <li>My Membership</li>
                    </Link>
                    <Link to="/update-details">
                        <li>Update Details</li>
                    </Link>
                    <Link to="/freeze-membership">
                        <li>Freeze Membership</li>
                    </Link>
                    <Link to="/membership-cencellaation">
                        <li>Membership Cancellation</li>
                    </Link>
                    <Link to="/change-home-club">
                        <li>Change Home Club</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
