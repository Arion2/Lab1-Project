import React from "react";
import { Star } from "lucide-react";
import "./StarRating.css";

const StarRating = ({ rating, onChange }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1; // stars start from 1 not 0
        return (
          <Star
            key={index}
            size={20}
            className={`star ${starValue <= rating ? "filled" : "empty"}`}
            onClick={() => onChange(starValue)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
