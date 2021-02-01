import "./Profile.css"
import { useSelector } from 'react-redux';
import bubbleBop from "../../img/blue-avatar.svg";

function Profile() {
    const currentUser = useSelector(state => {
        return state.session.user;
    });
    console.log(currentUser)
    console.log(currentUser.email)

    return (
        <>
            <div className="profile-body">
                <div className="profile">
                    <div className="username">
                        <p className="name">{currentUser.name}</p>
                        <ps className="user-name">{currentUser.username}</ps>
                        <br/>
                        <ps className="email">{currentUser.email}</ps>

                    </div>

                </div>
                <div className="activity">
                    <p className="activity-header">Recent Activity</p>
                    <div>
                        <p className="users-activity"><b>{currentUser.name}</b> visited <b>Wasabi Sushi Bar</b> <br/> in <b>San Diego, CA</b></p>
                        <p className="users-activity-2"><b>{currentUser.name}</b> enjoyed a <b>Dynamite Roll</b> <br/> at <b>Wasabi Sushi Bar</b></p>
                        <p className="users-activity"><b>{currentUser.name}</b> visited <b>Aikou Sushi Bar</b> <br/> in <b>Brooklyn, NY</b></p>
                        <p className="users-activity-2"><b>{currentUser.name}</b> visited <b>Wataru Sushi Bar</b> <br/> in <b>Seattle, WA</b></p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Profile;
