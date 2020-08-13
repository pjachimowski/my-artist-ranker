import React from 'react';
import Artist from './Artist';
import ArtistDetail from './ArtistDetails';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const artists = useSelector((state) => state.artists);

  return (
    <div>
      <div className="add-nav">
        <Link className="add-artist" to="/add">
          {' '}
          <i className="fas fa-user-plus"></i>
        </Link>
      </div>
      {artists.length > 0 ? (
        <div>
          {artists
            .sort((a, b) => b.rating - a.rating)
            .map((artist, index) => (
              <Artist
                rating={artist.rating}
                key={artist.id}
                index={index}
                artist={artist}
              />
            ))}
        </div>
      ) : (
        <div className="list-empty">
          <h4>Artist list is empty</h4>
          <h4>
            <i class="far fa-frown"></i>
          </h4>
        </div>
      )}
      <div className="artist-detail">
        <ArtistDetail />
      </div>
    </div>
  );
};

export default Home;
