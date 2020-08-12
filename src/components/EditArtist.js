import React, { useState }  from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addArtist } from '../actions/player';

const EditArtist = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [picture, setImg] = useState(''); //<<<
  
    const history = useHistory();
  
    const submitArtist = () => {
      dispatch(addArtist(name, picture));
      history.push('/');
    };

    const onNameChange = (e) => {
      setName(e.target.value);
    };
  
    const onPictureChange = (e) => {
      setImg(e.target.value) //<<<
    };

    return (
      <div className="add-artist-form">
        <Form onSubmit={submitArtist}>
          <Form.Group>
            <Form.Label className="label">Name</Form.Label>
            {/* <form onSubmit={this.addPlayer}> */}
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
              <button className="add-artist" type="submit" value="Add Player">
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
  }

export default EditArtist;







// import React, { useState, useContext, useEffect } from 'react';
// import { GlobalContext } from '../store/GlobalState';
// import { Link, useHistory } from 'react-router-dom';
// import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

// export const EditArtist = (props) => {
  // const [selectedArtist, setSelectedArtist] = useState({
  //   id: '',
  //   name: '',
  // });

  // const { artists, editArtist } = useContext(GlobalContext);
  // const history = useHistory();
  // const currentArtistId = props.match.params.id;

  // useEffect(() => {
  //   const artistId = currentArtistId;
  //   const setectedArtist = artists.find(
  //     (artist) => artist.id === artistId
  //   );
  //   setSelectedArtist(setectedArtist);
  // }, [currentArtistId, artists]);

  // const onSubmit = () => {
  //   editArtist(selectedArtist);
  //   history.push('/');
  // };

  // const onChange = (e) => {
  //   setSelectedArtist({ ...selectedArtist, [e.target.name]: e.target.value });
  // };


  // return (
  //   <div>HELLO</div>
    // onSubmit={onSubmit}
    // <Form >
    //   <FormGroup>
    //     <Label>Name</Label>
    //     <Input
    //       type="text"
    //       name="name"
    //       // value={selectedArtist.name}
    //       // onChange={onChange}
    //       placeholder="Enter Artist Name"
    //     ></Input>

    //   </FormGroup>
    //   <Button type="submit">Edit Artist</Button>
    //   <Link to="/" className="btn btn-danger ml-2">
    //     Cancel
    //   </Link>
    // </Form>
//   );
// };
