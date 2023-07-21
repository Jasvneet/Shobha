import csrfFetch from './csrf';


export const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW, 
    review
})

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS, 
    reviews
})

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW, 
    reviewId
})

export const fetchReview = (reviewId) => async(dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`)

    if (response.ok) {
        const review = await response.json();
        dispatch(receiveReview(review));
    }
}

export const deleteReview = (reviewId) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(removeReview(reviewId))
    }
}

export const createReview = (review) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews`, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const review = await response.json();
        dispatch(receiveReview(review))
    }
}

export const updateReview = (review) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const review = await response.json();
        dispatch(receiveReview(review))
    }
}

// const initialState = {
//     reviews: {}
// }

const reviewsReducer = (state = {}, action) => {
    let newState = {...state};

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return {...action.reviews};
        case RECEIVE_REVIEW:
            return {...state, [action.review.review.id]: action.review.review};
        case REMOVE_REVIEW:
            delete newState[action.reviewId]
            return newState
        default:
            return state;
    }
}

export default reviewsReducer;
