import { fetch } from './csrf';

const get_user_reviews = "/reviews/get_user_reviews";

const getReviews = (reviews) => {
    return {
        type: get_user_reviews,
        reviews: reviews,
    };
};

export const fetchAllReviews = (user_id) => {
    return async (dispatch) => {
        const response = await fetch(`/api/reviews/${user_id}`);
        dispatch(
            getReviews(response.data)
        );
    };
};

const initialState = {};
const reviewReducer = (state = initialState, action) => {
    let newState = {...state}
    switch(action.type) {
        case get_user_reviews:
            let nextState = { ...action.reviews}
            return nextState;
        default:
            return state;
    }
}

export default reviewReducer;
