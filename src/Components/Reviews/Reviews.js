import React from "react";
import LikeButton from "../LikeButton/LikeButton";
import "./Reviews.scss";

function Reviews({ review }) {
  return (
    <div className="Review">
      <div>
        <img src={review.img} alt="" />
        <div className="text">
          <h3>{review.name}</h3>
          <p>{review.lastseen}</p>
        </div>
      </div>
      <div className="like-description">
        <LikeButton likeCount={12} />
        <p>{review.description}</p>
      </div>
    </div>
  );
}
export default Reviews;
