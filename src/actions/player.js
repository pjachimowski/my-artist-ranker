import * as PlayerActionTypes from '../actiontypes/players';

export const addPlayer = (name, picture) => {
  return {
    type: PlayerActionTypes.ADD_PLAYER,
    name, // add new player element
    picture,
  };
};

export const removePlayer = (index) => {
  return {
    type: PlayerActionTypes.REMOVE_PLAYER,
    index,
  };
};

export const updatePlayerScore = (index, score) => {
  return {
    type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
    index,
    score, 
  };
};

export const selectPlayer = index => {
  return {
    type: PlayerActionTypes.SELECT_PLAYER,
    index
  };
};
