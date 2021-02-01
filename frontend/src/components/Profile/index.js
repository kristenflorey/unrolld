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
                        {/* <p className="name">{currentUser.name}</p> */}
                        <p className="name">{currentUser.username}</p>
                        <p className="email">{currentUser.email}</p>

                    </div>

                </div>
                <div className="activity">
                    <p className="activity-header">Recent Activity</p>
                    <div>
                        <p className="users-activity"><b>{currentUser.username}</b> visited <b>Wasabi Sushi Bar</b> <br/> in <b>San Diego, CA</b></p>
                        <p className="users-activity-2"><b>{currentUser.username}</b> enjoyed a <b>Dynamite Roll</b> <br/> at <b>Wasabi Sushi Bar</b></p>
                        <p className="users-activity"><b>{currentUser.username}</b> visited <b>Aikou Sushi Bar</b> <br/> in <b>Brooklyn, NY</b></p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Profile;
