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
<<<<<<< Updated upstream
                    <div>
                        <img className="profile-avatar-pic" alt="avatar"src={bubbleBop} />
                    </div>
                    <div className="username">
                        <p className="name">Arianna Johnson</p>
                        <ps>{currentUser.username}</ps>
=======
                    <div className="profile-text">
                        <p className="name">Jesse Warren</p>
                        <p className="username">{currentUser.username}</p>
>>>>>>> Stashed changes
                    </div>

                </div>
                <div>
                    <h1 className="activity">Your Recent Activity</h1>
                    <hr/>
                    <div>
    <h3 className="users-activity">{currentUser.name} visited Wasabi Sushi Bar</h3>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Profile;
