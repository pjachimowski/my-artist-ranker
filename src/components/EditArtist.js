import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Link, useHistory } from 'react-router-dom';
import { updateArtist } from '../actions/artist';

export const EditArtist = props => {
  const dispatch = useDispatch();
  const artists = useSelector(state => state.artists);
  // const artistId = useSelector((state) => state.artistPageId);
  const artistId = props.match.params.id;
  const currentArtist = artists.find(artist => artist.id === artistId);

  const history = useHistory();
  const editArtist = e => {
    e.preventDefault();
    const nameValue = document.getElementById('updateNameInput').value;
    console.log('nameValue', nameValue);
    const picValue = document.getElementById('updatePicInput').value;
    console.log('picValue', picValue);
    const updatedName = nameValue || currentArtist.name;
    console.log('updatedName', updatedName);
    const updatedPic = picValue || currentArtist.picture;
    console.log('updatedPic', updatedPic);
    dispatch(updateArtist(artistId, updatedName, updatedPic));
    document.getElementById('updateNameInput').value = '';
    document.getElementById('updatePicInput').value = '';
    history.push('/');
  };

  return (
    <div className="add-artist-form">
      <h2>
        Edit
        {currentArtist.name}
      </h2>
      <div className="artist-profile">
        <aside>
          <img
            className="artist-img-big"
            src={currentArtist.picture}
            alt="Artist Album" />
        </aside>
        <aside>
          <p>
            your rating: 
             {currentArtist.rating}
          </p>
          <p>
            last updated: 
            {currentArtist.updated}
          </p>
          <p>
            created: 
            {currentArtist.created}
          </p>
        </aside>
      </div>
      <Form onSubmit={editArtist}>
        <Form.Group>
          <Form.Label htmlFor="updateNameInput" className="label">
            Name
          </Form.Label>
          <Form.Control
            className="input"
            type="text"
            id="updateNameInput"
            placeholder={currentArtist.name} />

          <div>
            <Form.Label htmlFor="updatePicInput" className="label">
              Pic URL
            </Form.Label>
            <Form.Control
              className="input"
              type="text"
              id="updatePicInput"
              placeholder={currentArtist.picture} />
          </div>
          <div className="btn-user-edit">
            <button className="add-artist" type="submit">
              <i className="fas fa-user-edit" />
            </button>
          </div>
        </Form.Group>
      </Form>

      <Link to="/" className="btn-back">
        BACK
      </Link>
    </div>
  );
};

export default EditArtist;
