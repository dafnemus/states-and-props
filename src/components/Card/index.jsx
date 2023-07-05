import PropTypes from "prop-types";
import "./styles.css";

const Card = ({ item }) => {
  return (
    <div className="card">
      <p>{item}</p>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.string,
};

Card.defaultProps = {
  item: "",
};
export default Card;
