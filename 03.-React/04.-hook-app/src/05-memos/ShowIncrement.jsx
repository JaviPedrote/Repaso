/* eslint-disable react/display-name */
import { memo } from "react";
import PropTypes from "prop-types";


export const ShowIncrement = memo(({ increment }) => {
  console.log(" Me volví a generar :( ");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});

ShowIncrement.propTypes = {
  increment: PropTypes.string.isRequired,
};
