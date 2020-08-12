import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
// import { v4 as uuid } from 'uuid';
// import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class AddArtist extends Component {
  state = {
    name: '',
    picture: '',
  };

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState({ name });
  };

  onPictureChange = (e) => {
    const picture = e.target.value;
    this.setState({ picture });
  };

  addPlayer = (e) => {
    if (e) e.preventDefault();
    this.props.addPlayer(this.state.name, this.state.picture);
    this.setState({ 
      name: '',
      picture: '',
     });
  };

  render() {
    return (
      <div className="add-artist-form">
        <Form onSubmit={this.addPlayer}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            {/* <form onSubmit={this.addPlayer}> */}
            <Form.Control className="input" 
              type="text"
              value={this.state.name}
              onChange={this.onNameChange}
              placeholder="add new artist"
            />
            <Form.Label>Picture url</Form.Label>
            <Form.Control className="input"  type="text"
              value={this.state.picture}
              onChange={this.onPictureChange}
              placeholder="url for picture" />
            <Form.Control type="submit" value="Add Player" />
          </Form.Group>
        </Form>
        <Link to="/" className="btn-back">
          BACK
        </Link>
      </div>
    );
  }
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
