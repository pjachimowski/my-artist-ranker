import React from 'react';
import _ from 'lodash';

const Rating = (props) => {
  return (
    <div className="rating">
      {_(props.rating).times(() => (
        <i key={props.id} className="far fa-star"></i>
      ))}
    </div>
  );
};

// Counter.propTypes = {
//   updatePlayerScore: PropTypes.func.isRequired,
//   index: PropTypes.number.isRequired,
//   score: PropTypes.number.isRequired,
// };

export default Rating;
