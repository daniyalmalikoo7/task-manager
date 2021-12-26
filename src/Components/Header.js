import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, toggleForm, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        toggleForm={toggleForm}
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JSX

// const headingStyles = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;
