import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateArtist } from '../actions/artist';
import Form from 'react-bootstrap/Form';
import { Link, useHistory } from 'react-router-dom';

export const EditArtist = (props) => {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists);
  // const artistId = useSelector((state) => state.artistPageId);
  const artistId = props.match.params.id;
  const currentArtist = artists.find((artist) => artist.id === artistId);

  const history = useHistory();
  const editArtist = (e) => {
    e.preventDefault();
    const nameValue = document.getElementById('updateNameInput').value;
    const picValue = document.getElementById('updatePicInput').value;
    const updatedName = nameValue || currentArtist.name;
    const updatedPic = picValue || currentArtist.pic;
    dispatch(updateArtist(artistId, updatedName, updatedPic));
    document.getElementById('updateNameInput').value = '';
    document.getElementById('updatePicInput').value = '';
    history.push('/');
  };

  return (
    <div className="add-artist-form">
      <h2>Edit Artist</h2>
      <Form onSubmit={editArtist}>
        <Form.Group>
          <label htmlFor="updateNameInput" className="label">
            Name
            <input
              className="input"
              type="text"
              id="updateNameInput"
              placeholder={currentArtist.name}
            />
          </label>
          <div>
            <label htmlFor="updatePicInput" className="label">
              Pic URL
              <input
                className="input"
                type="text"
                id="updatePicInput"
                placeholder={currentArtist.pic}
              />
            </label>
          </div>
          <div>
            <button className="add-artist" type="submit">
              <i className="fas fa-user-edit"></i>
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
