import bubbleBop from "../../img/sushi-tray.png";
import "./Home.css"

function HomePage() {
    return (
        <div className='home-body'>
            <div className="circle">
                <p className='discoversushi'>
                        DISCOVER
                        <br/>
                        AND
                        <br/>
                        SHARE
                        <br/>
                        YOUR
                        <br/>
                        FAVORITE
                        <br/>
                        SUSHI
                        <br/>
                </p>
            </div>
            <img className='sushi-tray' alt='sushi-tray' src={bubbleBop}/>
        </div>

    )
};


export default HomePage;
