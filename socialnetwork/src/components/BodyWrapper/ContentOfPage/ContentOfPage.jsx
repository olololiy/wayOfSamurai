import Layout from "../Layout/Layout";
import {Routes, Route, Outlet} from "react-router-dom";
function ContentOfPage(){

    return(
        <div>
            <Outlet  />
        </div>
    )
}
export  default ContentOfPage;