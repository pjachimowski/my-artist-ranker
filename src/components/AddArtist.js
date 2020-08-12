import React, { useState }  from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addArtist } from '../actions/player';
// import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AddArtist = () => {
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


  // state = {
  //   name: '',
  //   picture: '',
  // };
  

  // onNameChange = (e) => {
  //   const name = e.target.value;
  //   this.setState({ name });
  // };

  // onPictureChange = (e) => {
  //   const picture = e.target.value;
  //   this.setState({ picture });
  // };

  // addPlayer = (e) => {
  //   if (e) e.preventDefault();
  //   this.props.addPlayer(this.state.name, this.state.picture);
  //   this.setState({
  //     name: '',
  //     picture: '',
  //   });
  // };


    
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


// AddPlayerForm.propTypes = {
//   addPlayer: PropTypes.func.isRequired,
// };

//   const [name, setName] = useState('');
//   const [picture, setImg] = useState(''); //<<<

//   const { addArtist } = useContext(GlobalContext);
//   const history = useHistory();

//   const onSubmit = () => {
//     const newArtist = {
//       id: uuid(),
//       name,
//       picture, //<<<
//     };
//     addArtist(newArtist);
//     history.push('/');
//   };
//   const onChange = (e) => {
//     setName(e.target.value);
//   };

//   const onChangePic = (e) => {
//     setImg(e.target.value) //<<<
//   };

//   return (
//
//         <Input
//           type="text"
//           name="name"
//           value={name}
//           onChange={onChange}
//           placeholder="Enter Artist Name"
//           minLength={3}
//         ></Input>

//         {/* //<<< */}
//         <Label>Picture url</Label>
//         <Input type="text" name="picture" value={picture} onChange={onChangePic} placeholder="Enter url for the picture" >
//         </Input>
//         {/* //<<< */}

//       </FormGroup>
//       <Button type="submit"><i className="far fa-save"></i> SAVE</Button>
//       <Link to="/" className="btn btn-danger ml-2">
//         BACK
//       </Link>
//     </Form>
//   );
// };

export default AddArtist;
