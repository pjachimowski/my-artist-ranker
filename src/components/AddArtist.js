import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


export default class AddArtist extends Component {
  state = {
    name: '',
  };
  
  const [name, setName] = useState('');
  const [picture, setImg] = useState(''); //<<<

  const { addArtist } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = () => {
    const newArtist = {
      id: uuid(),
      name,
      picture, //<<<
    };
    addArtist(newArtist);
    history.push('/');
  };
  const onChange = (e) => {
    setName(e.target.value);
  };

  const onChangePic = (e) => {
    setImg(e.target.value) //<<<
  };


  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Enter Artist Name"
          minLength={3}
        ></Input>

        {/* //<<< */}
        <Label>Picture url</Label>
        <Input type="text" name="picture" value={picture} onChange={onChangePic} placeholder="Enter url for the picture" >
        </Input>
        {/* //<<< */}

        
        
      </FormGroup>
      <Button type="submit"><i className="far fa-save"></i> SAVE</Button>
      <Link to="/" className="btn btn-danger ml-2">
        BACK
      </Link>
    </Form>
  );
};
