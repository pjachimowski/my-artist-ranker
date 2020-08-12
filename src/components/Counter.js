import React, {  } from 'react';
import { useDispatch } from 'react-redux';
import { updatePlayerScore } from '../actions/player';

const Counter = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => dispatch(updatePlayerScore(props.index, -1))}
      >
        - 
      </button>
      <div className="counter-score"> {props.rating} </div>
      <button
        className="counter-action increment"
        onClick={() => dispatch(updatePlayerScore(props.index, 1))}
      >
        + 
      </button>
    </div>
  );
};

// Counter.propTypes = {
//   updatePlayerScore: PropTypes.func.isRequired,
//   index: PropTypes.number.isRequired,
//   score: PropTypes.number.isRequired,
// };

export default Counter;
