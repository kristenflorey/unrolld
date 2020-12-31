import "./Profile.css"
import { useSelector } from 'react-redux';
import bubbleBop from "../../img/blue-avatar.svg";

function Profile() {
    const currentUser = useSelector(state => {
        return state.session.user;
    });

    return (
        <>
            <div className="profile-body">
                <div className="profile">
                    <div>
                        <img className="profile-avatar-pic" alt="avatar"src={bubbleBop} />
                    </div>
                    <div className="username">
                        <p className="name">Arianna Johnson</p>
                        <ps>{currentUser.username}</ps>
                    </div>

                </div>
                <div>
                    <h1 className="activity">Your Recent Activity</h1>
                </div>
            </div>
        </>
    )
};

export default Profile;
