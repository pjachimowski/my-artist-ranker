import React from 'react';


const YouRanked = (props) => {
  const noOfArtists = props.artists.length;

  return (
    <div className="you-ranked">
      <p>
        You have <strong>{noOfArtists}</strong> artist(s) in your ranking app
      </p>
 
    </div>
  );
};

// Stats.propTypes = {
//   players: React.PropTypes.array.isRequired,
// };

export default YouRanked;
