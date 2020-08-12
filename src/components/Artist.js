import React from 'react';
import Counter from './Counter';
import Rating from './Rating';
import { useDispatch } from 'react-redux';
import { removePlayer, selectPlayer } from '../actions/player';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const Artist = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="artist">
      <img
        className="artist-img"
        src={props.artist.picture}
        alt="Artist Album"
      ></img>
      <div className="artist-section">
        <Link className="artist-name" to={`/edit/${props.artist.id}`}>
          {' '}
        <div
          
          onClick={() => dispatch(selectPlayer(props.index))}
        >
          {props.artist.name}
        </div>
        </Link>
        <section>
          your rating: <Rating rating={props.artist.rating} />{' '}
        </section>
      </div>
      <div className="artist-score">
        <Counter index={props.index} rating={props.artist.rating} />
      </div>
      <div
        className="remove-artist"
        onClick={() => dispatch(removePlayer(props.index))}
      >
        <i className="fas fa-user-minus"></i>
      </div>
    </div>
  );
};

// Player.propTypes = {
//   name: PropTypes.string.isRequired,
//   index: PropTypes.number.isRequired,
//   score: PropTypes.number.isRequired,
//   removePlayer: PropTypes.func.isRequired,
//   updatePlayerScore: PropTypes.func.isRequired,
// };

export default Artist;
