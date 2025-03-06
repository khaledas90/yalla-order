"use client";

import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

interface RestaurantRatingProps {
  initialRating?: number;
  editable?: boolean;
}

const RestaurantRating: React.FC<RestaurantRatingProps> = ({
  initialRating = 3,
  editable = true,
}) => {
  const [mounted, setMounted] = useState(false);
  const [rating, setRating] = useState<number>(initialRating);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <StarRatings
      rating={rating}
      starRatedColor="gold"
      changeRating={editable ? setRating : undefined}
      numberOfStars={5}
      starDimension="28px"
      name="rating"
    />
  );
};

export default RestaurantRating;
