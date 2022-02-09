import logo from './logo.svg';
import './App.css';
import Header from './components/BodyWrapper/Header/Header';
import NavBar from './components/BodyWrapper/NavBar/NavBar';
import Profile from './components/BodyWrapper/NavBar/Content/Profile/Profile';

import {Routes, Route, NavLink} from "react-router-dom";
import WelcomePage from "./components/BodyWrapper/NavBar/Content/WelcomePage/WelcomePage";
import Layout from "./components/BodyWrapper/Layout/Layout";
import Messages from "./components/BodyWrapper/NavBar/Content/Messages/Messages";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<WelcomePage/>}/>
                {/*<Route path={'profile'} element={<Profile/>}/>*/}
                <NavLink to="profile">Messages</NavLink>
                <Route path={'messages'} element={<Messages/>}/>
            </Route>
        </Routes>
    );
}

export default App;
