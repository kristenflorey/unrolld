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
                    <div className="profile-text">
                        <p className="name">Jesse Warren</p>
                        <p classNAme="username">{currentUser.username}</p>
                    </div>

                </div>
                <div>
                    {/* <h1 className="activity">Your Recent Activity</h1>
                    <hr/> */}
                    <div>
                    <p className="users-activity"><b>Jesse Warren</b> <br/> enjoyed a <b>Dragon Roll</b> <br/> at <b>Wasabi Sushi Bar</b></p>
                    <p className="users-activity-2"><b>Jesse Warren</b> <br/> visited <b>Aikou Sushi Bar</b><br/> in <b> San Diego, CA </b></p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Profile;
