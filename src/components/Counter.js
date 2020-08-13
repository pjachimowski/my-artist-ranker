import React from 'react';
import { useDispatch } from 'react-redux';
import { updateArtistRating } from '../actions/artist';

const Counter = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => dispatch(updateArtistRating(props.index, -1))}
      >
        -
      </button>
      <div className="counter-rating"> {props.rating} </div>
      <button
        className="counter-action increment"
        onClick={() => dispatch(updateArtistRating(props.index, 1))}
      >
        +
      </button>
    </div>
  );
};

// Counter.propTypes = {
//   updateArtistRating: PropTypes.func.isRequired,
//   index: PropTypes.number.isRequired,
//   rating: PropTypes.number.isRequired,
// };

export default Counter;
