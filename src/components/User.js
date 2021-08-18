import React from "react";
import PropTypes from "prop-types";

export default function User(props) {
  const { userName, age, isCoding } = props;
  return (
    <div>
      <h2>{userName}</h2>
      <h2>{age}</h2>
      <h2>{isCoding}</h2>
      {isCoding ? <h1>Coding</h1> : <h3>Not coding</h3>}
    </div>
  );
}

User.propTypes = {
  userName: PropTypes.string,
  age: PropTypes.number,
  isCoding: PropTypes.bool,
};
