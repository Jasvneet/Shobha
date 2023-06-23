import "./Review.css"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useState } from "react"

export default function ReviewIndexItem({review}) {
    const currentUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    return (
        <>

            <div className="review-wrapper">

                <div className="star-rating">

                </div>

                <div className="review-details">
                    <h3>{review.title}</h3>
                    <p>{review.body}</p>
                </div>

                <div className="review-user">
                   
                </div>

            </div>
        </>
    )
}