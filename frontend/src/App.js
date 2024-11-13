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
                </Route>
            </Routes>
        </Router>
    );
}
