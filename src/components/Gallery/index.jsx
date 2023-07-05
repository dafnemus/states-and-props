import PropTypes from "prop-types";
import Card from "../Card";
import './styles.css';

const Gallery = ({ list }) => {
  return (
    <div className="gallery">
      {list.map((item) => (
        <Card key={item} item={item} />
      ))}
    </div>
  );
};

Gallery.propTypes = {
  list: PropTypes.array,
};

Gallery.defaultProps = {
  list: [],
};

export default Gallery;
