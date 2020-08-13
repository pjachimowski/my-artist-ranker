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

// Rating.propTypes = {
//   id: PropTypes.number.isRequired,
//   rating: PropTypes.number.isRequired,
// };

export default Rating;
