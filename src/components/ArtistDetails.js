import React from 'react';

const ArtistDetail = ({ selectedArtist }) => {
  if (selectedArtist) {
    return (
      <div>
        <h3>{selectedArtist.name}</h3>
        <ul>
          <li>
            <span>Score: </span>
            {selectedArtist.score}
          </li>
          <li>
            <span>Created: </span>
            {selectedArtist.created}
          </li>
          <li>
            <span>Updated: </span>
            {selectedArtist.updated}
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="footer">
        <p>
          Take a deep breath, listen to your favorite song and realize
          everything is gonna be okay, nothing is permanent.{' '}
        </p>
      </div>
    );
  }
};

// ArtistDetail.propTypes = {
//   selectedArtist: PropTypes.object
// };

export default ArtistDetail;
