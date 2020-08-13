import React from 'react';
import { useSelector } from 'react-redux';

const YouRanked = () => {
  const artists = useSelector((state) => state.artists);
  const noOfArtists = artists.length;

  return (
    <div className="you-ranked">
      <p>
        You have <strong>{noOfArtists}</strong> artist(s) in your ranking app
      </p>
    </div>
  );
};

export default YouRanked;
