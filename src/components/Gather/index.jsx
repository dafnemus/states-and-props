import PropTypes from "prop-types";
import Button from "../Button";

const Gather = ({ value, onChange, onClick, list }) => {
  return (
    <div>
      <input onChange={onChange} placeholder="Procurar" value={value} />
      <Button onClick={onClick} text="Agregar" />
      <p>Numbers: </p>
      <span>{list}</span>
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
  
};
export default Gather;
