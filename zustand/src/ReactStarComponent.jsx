import ReactStars from "react-rating-stars-component";

export const ReactStarComponent = ({ onChange, value }) => {
  const [starValue, setStarValue] = useState(value);

  const ratingValue = (currentRating) => {
    setStarValue(currentRating);
  };

  return (
    <ReactStars
      count={5}
      size={24}
      activeColor="#ffd700"
      onChange={ratingValue}
      value={starValue}
    />
  );
};
