import Posts from './Posts/Posts';
import s from './Profile.module.css'

function Profile() {
    return(
        <div className={s.profile}>
            <img className={s.img} src="https://www.baikal-olkhon.ru/pic/9768d2c3130abef1eec1e0b4e6b952e0/saraiskiy_leto.jpg" alt={"baikall"}/>
            <h2>Something about me</h2>
            <Posts/>
        </div>
    )
}

export default Profile;