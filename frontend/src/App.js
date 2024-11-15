import './App.css';
import './i18n';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HelloWorldPage} from "./pages/HelloWorldPage";
import {HelloNamePage} from "./pages/HelloNamePage";
import {Layout} from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import FreeTrialPage from "./pages/FreeTrialPage";
import JoinNowPage from "./pages/JoinNowPage";
import MemberPage from "./pages/MemberPage"
import MyMembershipPage from "./pages/MyMembershipPage"
import FreeTrialPassPage from "./pages/FreeTrialPassPage";
import FreeTrialFailPage from "./pages/FreeTrialFailPage";
import ChangeHomeClubPage from "./pages/ChangeHomeClubPage";
import ChangeHomeClubPassPage from "./pages/ChangeHomeClubPass";
import UpdateMembershipInformationPage from "./pages/UpdateMembershipInformationPage";
import UpdateMembershipInformationPassPage from "./pages/UpdateMembershipInformationPassPage";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path={'/hello_name/'} element={<HelloNamePage/>}/>
                    <Route path={'*'} element={<HelloWorldPage/>}/>
                    <Route path={'/homepage/'} element={<HomePage/>}/>
                    <Route path={'/login/'} element={<LoginPage/>}/>
                    <Route path={'/free-trial/'} element={<FreeTrialPage/>}/>
                    <Route path={'/join-now/'} element={<JoinNowPage/>}/>
                    <Route path={'/member/'} element={<MemberPage/>}/>
                    <Route path={'/my-membership/'} element={<MyMembershipPage/>}/>
                    <Route path={'/free-trial-pass/'} element={<FreeTrialPassPage/>}/>
                    <Route path={'/free-trial-fail/'} element={<FreeTrialFailPage/>}/>
                    <Route path={'/change-home-club/'} element={<ChangeHomeClubPage/>}/>
                    <Route path={'/change-home-club-pass/'} element={<ChangeHomeClubPassPage/>}/>
                    <Route path={'/update-membership-information/'} element={<UpdateMembershipInformationPage/>}/>
                    <Route path={'/update-membership-information-pass/'} element={<UpdateMembershipInformationPassPage/>}/>
                </Route>
            </Routes>
        </Router>
    );
}
