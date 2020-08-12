import React from 'react';
import Artist from './Artist';
import PlayerDetail from './PlayerDetails';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  // const dispatch = useDispatch();
  const artists = useSelector(state => state.artists)

  // const addPlayer = useSelector((state) => state.addPlayer);
  // const selectedPlayer = useSelector((state) => state.selectedPlayer);

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
      <div className="add-nav">
        <Link className="add-artist" to="/add">
          {' '}
          <i className="fas fa-user-plus"></i>
        </Link>
      </div>
      <div>
      {artists.sort((a, b) => b.rating - a.rating).map((artist, index) => (<Artist rating={artist.rating} key={artist.id} index={index} artist={artist}/>))}
      </div>
      <div className="artist-detail">
        <PlayerDetail />
      </div>
    </div>
  );
};
// }

export default Home;
