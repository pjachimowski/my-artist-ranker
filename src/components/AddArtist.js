import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addArtist } from '../actions/artist';

const AddArtist = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [picture, setImg] = useState('');

  const history = useHistory();

  const submitArtist = () => {
    dispatch(addArtist(name, picture));
    history.push('/');
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onPictureChange = (e) => {
    setImg(e.target.value);
  };

  return (
    <div className="add-artist-form">
    <h2>Add Artist</h2>
      <Form onSubmit={submitArtist}>
        <Form.Group>
          <Form.Label className="label">Name</Form.Label>
          <Form.Control
            className="input"
            type="text"
            // value={this.state.name}
            onChange={onNameChange}
            placeholder="add new artist name"
          />
          <Form.Label className="label">Picture</Form.Label>
          <Form.Control
            className="input"
            type="text"
            // value={this.state.picture}
            onChange={onPictureChange}
            placeholder="add url for the artist picture"
          />
          <div className="center-btn">
            <button className="add-artist" type="submit">
              <i className="fas fa-user-plus"></i>
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

export default AddArtist;
