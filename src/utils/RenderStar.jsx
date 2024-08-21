import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const renderRatingStars = (dealRating) => {
  const stars = [];
  const roundedRating = Math.floor(dealRating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className="text-[yellow]"
      ></FontAwesomeIcon>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <FontAwesomeIcon
        key={fullStars}
        icon={faStarHalfStroke}
        className="text-[yellow]"
      ></FontAwesomeIcon>
    );
  }

  const totalStars = 5;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={fullStars + (hasHalfStar ? 1 : 0) + i}
        icon={faStar}
        className="text-[#c1c0c0]"
      ></FontAwesomeIcon>
    );
  }

  return stars;
};
