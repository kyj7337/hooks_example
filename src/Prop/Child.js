import React from "react";
import PropTypes from "prop-types";

Child.propTypes = {
  a: PropTypes.number,
  validate: PropTypes.func.isRequired,
};

function Child(props) {
  return (
    <div>
      Child
      <h3> {props.a}</h3> <button onClick={props.validate}>click me</button>
    </div>
  );
}

export default Child;
