import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Artist from '../components/Artist';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';
import { AddArtist } from '../components/AddArtist';
import PlayerDetail from '../components/PlayerDetails';

class App extends Component {
  // static propTypes = {
  //   players: PropTypes.array.isRequired,
  // };

  render() {
    const { dispatch, artists, selectedPlayerIndex } = this.props;
    const addPlayer = bindActionCreators(
      PlayerActionCreators.addPlayer,
      dispatch
    );
    const removePlayer = bindActionCreators(
      PlayerActionCreators.removePlayer,
      dispatch
    );
    const updatePlayerScore = bindActionCreators(
      PlayerActionCreators.updatePlayerScore,
      dispatch
    );
    const selectPlayer = bindActionCreators(
      PlayerActionCreators.selectPlayer,
      dispatch
    );

    let selectedPlayer;
    if (selectedPlayerIndex !== -1) {
      selectedPlayer = artists[selectedPlayerIndex];
    }

    return (
      <div className="app">
        <Router>
          <Header artists={artists} />
          <Route path="/add" component={AddArtist} />
        </Router>

        <div>
          {artists.map((artist, index) => (
            <Artist
              index={index}
              name={artist.name}
              rating={artist.rating}
              key={artist.id}
              picture={artist.picture}
              updatePlayerScore={updatePlayerScore}
              removePlayer={removePlayer}
              selectPlayer={selectPlayer}
            />
          ))}
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
        <div className="artist-detail">
          <PlayerDetail selectedPlayer={selectedPlayer} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  artists: state.artists,
  selectedPlayerIndex: state.selectedPlayerIndex,
});

export default connect(mapStateToProps)(App);
