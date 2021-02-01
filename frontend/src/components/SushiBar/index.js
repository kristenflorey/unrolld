import './sushibar.css';
import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import reviewReducer, { fetchAllReviews } from '../../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import sushi from "../../img/alaska-roll.png";
import ReviewForm from '../ReviewForm';


function SushiBar() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
    console.log(id)
    const myState = useSelector(state => {
        return state.reviews
    })

    // const sushiBar = useSelector((state) => state.SushiBar)

    console.log('myState', myState)
    useEffect(async() => {
        const res = await fetch(`/api/reviews/${id}`)
        const data = await res.json()
        console.log(data);
        setPosts(data);
        dispatch(fetchAllReviews(id));
    }, []);

return (
    <>
    <div className="reviews-page">

            {/* <img className="sushi-bar-img" alt="sushi-bar-avatar" src={sushi}/> */}
            {posts && posts.map((posts) => {
                const {SushiBar, SushiBar:{website:website_url, id:bar_id, location:bar_location} } = posts;
                return (
                    <>
                        <div className="sushi-bar-header">
                            <img className="sushi-bar-img" alt="avatar"src={`../../img/sushi-roll-${bar_id}.png`} />
                            <div className="sushi-bar-info">
                                <span className="sushi-bar-name">{SushiBar.name} Sushi Bar</span>
                                <br/>
                                <span className="bar-page-location">{bar_location}</span>
                                <br/>
                                <a href={website_url} target="_blank" className="bar-website-url">{website_url}</a>
                            </div>
                        </div>
                    </>
                )
            })}


        <p className="review-header">Reviews</p>
        {posts && posts.map((post)=>{
            const {User, SushiBar, rating, content, review, createdAt, id } = post;
            return (
            <div className="review-container" key={id}>
                <h3><b>{User.username}</b> said:</h3>
                <h2>
                    {review}
                </h2>
                <img className="star-rating"src={`../../img/star-rating-${rating}.png`}/>
                <h3>{content}</h3>
                <h3>{createdAt}</h3>
            </div>
            );
        })}
    </div>
    <ReviewForm/>
    </>
)
}


export default SushiBar;
