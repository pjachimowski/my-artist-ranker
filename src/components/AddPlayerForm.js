import React, { Component } from 'react';

export default class AddPlayerForm extends Component {
  state = {
    name: '',
    picture: '',
  };

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState({ name });
  };

  addPlayer = (e) => {
    if (e) e.preventDefault();
    this.props.addPlayer(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <div className="add-artist-form">
        <form onSubmit={this.addPlayer}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onNameChange}
            placeholder="add new artist"
          />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}

// AddPlayerForm.propTypes = {
//   addPlayer: PropTypes.func.isRequired,
// };
