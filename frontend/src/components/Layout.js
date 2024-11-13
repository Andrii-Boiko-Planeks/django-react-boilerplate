import {Component} from "react";
import {Outlet} from "react-router-dom";
import {Navigation} from "./Navigation";
import AutoLogout from "../AutoLogout";

export class Layout extends Component {
    render() {
        return (
            <div>
                <AutoLogout/>
                {/* <Navigation /> */}
                <div className="container">
                    <Outlet/>
                </div>
            </div>
        );
    }
}
