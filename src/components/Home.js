import React, { Component } from 'react';
import Artist from './Artist';
import AddPlayerForm from './AddPlayerForm';
import PlayerDetail from './PlayerDetails';

const Home = (props) => {
  // static propTypes = {
  //   players: PropTypes.array.isRequired,
  // };

  // render() {
  //   const { dispatch, artists, selectedPlayerIndex } = this.props;
  //   const addPlayer = bindActionCreators(
  //     PlayerActionCreators.addPlayer,
  //     dispatch
  //   );
  //   const removePlayer = bindActionCreators(
  //     PlayerActionCreators.removePlayer,
  //     dispatch
  //   );
  //   const updatePlayerScore = bindActionCreators(
  //     PlayerActionCreators.updatePlayerScore,
  //     dispatch
  //   );
  //   const selectPlayer = bindActionCreators(
  //     PlayerActionCreators.selectPlayer,
  //     dispatch
  //   );

    // let selectedPlayer;
    // if (selectedPlayerIndex !== -1) {
    //   selectedPlayer = artists[selectedPlayerIndex];
    // }
    return (
      <div>
        <div>
          {props.artists.map((artist, index) => (
            <Artist
              index={index}
              name={artist.name}
              rating={artist.rating}
              key={artist.id}
              picture={artist.picture}
              updatePlayerScore={props.updatePlayerScore}
              removePlayer={props.removePlayer}
              selectPlayer={props.selectPlayer}
            />
          ))}
        </div>
        <AddPlayerForm addPlayer={props.addPlayer} />
        <div className="artist-detail">
          <PlayerDetail selectedPlayer={props.selectedPlayer} />
        </div>
      </div>
    );
  }
// }

export default Home;
