import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {render} from 'react-dom';
import * as PlayerActionCreators from '../actions/player';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  Home from '../components/Home';
import  AddArtist  from '../components/AddArtist';
import { EditArtist } from '../components/EditArtist';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
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

          <Route exact path="/" render={() => (<Home 
          addPlayer={addPlayer} 
          removePlayer={removePlayer}  
          updatePlayerScore={updatePlayerScore} 
          selectPlayer={selectPlayer} 
          artists={artists} />)} />
          <Route path="/add" render={() => (<AddArtist 
          addPlayer={addPlayer} 
          removePlayer={removePlayer}  
          updatePlayerScore={updatePlayerScore} 
          selectPlayer={selectPlayer} 
          artists={artists} />)} />
          <Route path="/edit/:id" component={EditArtist} />
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  artists: state.artists,
  selectedPlayerIndex: state.selectedPlayerIndex,
});

export default connect(mapStateToProps)(App);
