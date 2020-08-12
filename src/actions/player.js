import * as PlayerActionTypes from '../actiontypes/players';

export const addArtist = (name, picture) => {
  return {
    type: PlayerActionTypes.ADD_PLAYER,
    name, // add new player element
    picture,
  };
};

export const removePlayer = (index) => {
  return {
    type: PlayerActionTypes.REMOVE_PLAYER,
    index: index,
  };
};

export const updatePlayerScore = (index, rating) => {
  return {
    type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
    index,
    rating, 
  };
};

export const selectPlayer = index => {
  return {
    type: PlayerActionTypes.SELECT_PLAYER,
    index
  };
};
