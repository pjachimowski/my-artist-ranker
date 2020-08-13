import React from 'react';
import _ from 'lodash';

const Rating = props => (
  <div className="rating">
    {_(props.rating).times(() => (
      <i key={props.id} className="far fa-star" />
    ))}
  </div>
);

// Rating.propTypes = {
//   id: PropTypes.number.isRequired,
//   rating: PropTypes.number.isRequired,
// };

export default Rating;
