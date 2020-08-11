import React from 'react';
import Counter from './Counter';

const Artist = (props) => (
  <div className="artist">
    <img className="artist-img" src={props.picture} alt="Artist picture"></img>
    <div className="artist-section">
      <div
        className="artist-name"
        onClick={() => props.selectPlayer(props.index)}
      >
        {props.name}
      </div>
      <section>your rating: {props.rating}</section>
    </div>
    <div className="artist-score">
      <Counter
        index={props.index}
        updatePlayerScore={props.updatePlayerScore}
        rating={props.rating}
      />
    </div>
    <div
      className="remove-artist"
      onClick={() => props.removePlayer(props.index)}
    >
      <i class="fas fa-user-minus"></i>
    </div>
  </div>
);

// Player.propTypes = {
//   name: PropTypes.string.isRequired,
//   index: PropTypes.number.isRequired,
//   score: PropTypes.number.isRequired,
//   removePlayer: PropTypes.func.isRequired,
//   updatePlayerScore: PropTypes.func.isRequired,
// };

export default Artist;
