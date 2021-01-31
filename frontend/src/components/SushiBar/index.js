import './sushibar.css';
import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import reviewReducer, { fetchAllReviews } from '../../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import sushi from "../../img/sushi-sea.png";
import ReviewForm from '../ReviewForm';


function SushiBar() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
    console.log(id)
    const myState = useSelector(state => {
        return state.reviews
    })

    console.log(myState)
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
        <div className="sushi-bar-header">
            <img className="sushi-bar-img" alt="sushi-bar-avatar" src={sushi}/>
            <h1>{SushiBar.name}</h1>
        </div>
        <h1 className="search-header">Reviews</h1>
        {posts && posts.map((post)=>{
            const {User, SushiBar, rating, content, review, createdAt, id } = post;
            return (
            <div className="review-container" key={id}>
                <h3>{User.username} said {review}</h3>
                <h3>
                SushiBar:{" "}
                <span>
                    {SushiBar.name}
                </span>
                </h3>
                <h3>{rating} Stars</h3>
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
