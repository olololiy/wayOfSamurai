import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import ContentOfPage from "../ContentOfPage/ContentOfPage";

function Layout() {

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <ContentOfPage />

        </div>
    )
}
export default Layout;