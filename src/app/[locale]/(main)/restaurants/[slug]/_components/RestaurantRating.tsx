"use client";

import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

const RestaurantRating: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [rating, setRating] = useState<number>(3);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <StarRatings
      rating={rating}
      starRatedColor="gold"
      changeRating={setRating}
      numberOfStars={5}
      starDimension="28px"
      name="rating"
    />
  );
};

export default RestaurantRating;
