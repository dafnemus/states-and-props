import PropTypes from "prop-types";
import Button from "../Button";
import "./styles.css";

const Gather = ({ value, onChange, onClick, list }) => {
  return (
    <div className="gather">
      <div>
        <input
          onChange={onChange}
          type="number"
          placeholder="Procurar"
          value={value}
        />
        <Button onClick={onClick} text="Agregar" />
      </div>
      <h2>Numbers: </h2>
      <span>{list.join(" - ")}</span>
    </div>
  );
};

Gather.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  list: PropTypes.array,
};

Gather.defaultProps = {
  value: "",
  onChange: () => {},
  onClick: () => {},
  list: [],
};
export default Gather;
