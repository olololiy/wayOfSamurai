 import s from './NavBar.module.css'
 import {Link} from "react-router-dom";

function NavBar() {
    return (
        
  <nav className={s.nav}>
        <div className={s.item}>
            <Link to={"profile"}>Profile</Link>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <Link to={"messages"}>Messages</Link>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>
        
    )
}

export default NavBar;

