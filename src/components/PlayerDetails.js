import React from 'react';

const PlayerDetail = ({ selectedPlayer }) => {
  if (selectedPlayer) {
    return (
      <div>
        <h3>{selectedPlayer.name}</h3>
        <ul>
          <li>
            <span>Score: </span>
            {selectedPlayer.score}
          </li>
          <li>
            <span>Created: </span>
            {selectedPlayer.created}
          </li>
          <li>
            <span>Updated: </span>
            {selectedPlayer.updated}
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

// PlayerDetail.propTypes = {
//   selectedPlayer: PropTypes.object
// };

export default PlayerDetail;
