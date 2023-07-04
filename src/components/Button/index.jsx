import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
  };
  
  Button.defaultProps = {
    text: "",
  };
  
  export default Button;
  