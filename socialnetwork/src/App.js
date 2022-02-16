import logo from './logo.svg';
import './App.css';
import Header from './components/BodyWrapper/Header/Header';
import NavBar from './components/BodyWrapper/NavBar/NavBar';
import Profile from './components/BodyWrapper/NavBar/Content/Profile/Profile';

import {Routes, Route} from "react-router-dom";
import WelcomePage from "./components/BodyWrapper/NavBar/Content/WelcomePage/WelcomePage";
import Layout from "./components/BodyWrapper/Layout/Layout";
import Dialogs from "./components/BodyWrapper/NavBar/Content/Dialogs/Dialogs";

function App(props) {

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<WelcomePage/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/dialogs' element={<Dialogs dialogs={props.dialogs} messages={props.messages} />}/>
                <Route path='*' element={<div>Page not found</div>}/>
            </Route>
        </Routes>
    );
}

export default App;
