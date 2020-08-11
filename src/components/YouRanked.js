import React from 'react';
import { Link } from 'react-router-dom';

const YouRanked = (props) => {
  const noOfArtists = props.artists.length;

  return (
    <div className="you-ranked">
      <p>
        You have <strong>{noOfArtists}</strong> artist(s) in your ranking app
      </p>
      <Link className="add-artist" to="/add"> add artist <i className="fas fa-user-plus"></i></Link>
    </div>
  );
};

// Stats.propTypes = {
//   players: React.PropTypes.array.isRequired,
// };

export default YouRanked;
