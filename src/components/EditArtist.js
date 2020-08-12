import React, { useState, useContext, useEffect } from 'react';
// import { GlobalContext } from '../store/GlobalState';
import { Link, useHistory } from 'react-router-dom';
// import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export const EditArtist = (props) => {
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


  return (
    <div>HELLO</div>
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
  );
};
