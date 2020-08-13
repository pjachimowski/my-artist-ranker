import React from 'react';
import Counter from './Counter';
import Rating from './Rating';
import { useDispatch } from 'react-redux';
import { removeArtist } from '../actions/artist';
import { Link } from 'react-router-dom';

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
          <div>{props.artist.name}</div>
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
        onClick={() => dispatch(removeArtist(props.index))}
      >
        <i className="fas fa-user-minus"></i>
      </div>
    </div>
  );
};

// Artist.propTypes = {
//   name: PropTypes.string.isRequired,
//   index: PropTypes.number.isRequired,
//   rating: PropTypes.number.isRequired,
//   removeArtist: PropTypes.func.isRequired,
//   updateArtistScore: PropTypes.func.isRequired,
// };

export default Artist;
