import * as ActionTypes from '../actiontypes/artist';

export const addArtist = (name, picture) => {
  return {
    type: ActionTypes.ADD_ARTIST,
    name,
    picture,
  };
};

export const removeArtist = (index) => {
  return {
    type: ActionTypes.REMOVE_ARTIST,
    index: index,
  };
};

export const editArtist = (artist) => {
  return {
    type: ActionTypes.EDIT_ARTIST,
    payload: artist,
  };
};

export const updateArtistRating = (index, rating) => {
  return {
    type: ActionTypes.UPDATE_ARTIST_RATING,
    index,
    rating,
  };
};

export const selectArtist = (index) => {
  return {
    type: ActionTypes.SELECT_ARTIST,
    index,
  };
};
