import React from 'react';
import { useDispatch } from 'react-redux';
import { updateArtistRating } from '../actions/artist';

const Counter = props => {
  const dispatch = useDispatch();
  const minBtn = document.getElementById('min');
  const plusBtn = document.getElementById('plus');
  const block = 'btn-disable';
  if (props.rating < 0) {
    minBtn.className += ` ${block}`;
  } else if (props.rating > 9) {
    plusBtn.className += ` ${block}`;
  } else{
    // plusBtn.className += "" + "counter-action";
    // minBtn.className += "" + "counter-action";
  }

  return (
    <div className="counter">
      <button
        id="min"
        className="counter-action decrement "
        onClick={() => dispatch(updateArtistRating(props.index, -1))}>
        -
      </button>
      <div className="counter-rating">
        {' '}
        {props.rating}
        {' '}
      </div>
      <button
        id="plus"
        className="counter-action increment"
        onClick={() => dispatch(updateArtistRating(props.index, 1))}>
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
