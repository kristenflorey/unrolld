import { useState, useEffect } from 'react';
import './reviewform.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllReviews } from '../../store/reviews';
const csrf = require("csurf")
const csrfToken = csrf({cookie:true})

function ReviewForm() {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id);

    // const [name, setName] = useState("")
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")

    const updateRating = (e) => setRating(e.target.value)
    const updateReview = (e) => setReview(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("/api/bars/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              rating,
              review
            }),
          });

    }

    return (
        <>
            <form className="review-form" onSubmit={handleSubmit}>
                <ps className="review-form-title">Post Review</ps>
                {/* <input type="hidden" name="_csrf" value={csrfToken}></input> */}
                <label htmlFor="review">Review</label>
                <textarea value={review} onChange={updateReview} name="review" type="text">

                </textarea>
                <label htmlFor="rating">Rating</label>
                <input value={rating} onChange={updateRating} name="rating" type="text">
                </input>
                <button type="submit">Submit</button>
            </form>
        </>
    )

}

export default ReviewForm;
