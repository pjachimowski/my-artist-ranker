import * as ActionTypes from '../actiontypes/artist';

export const addArtist = (name, picture) => ({
  type: ActionTypes.ADD_ARTIST,
  name,
  picture,
});

export const removeArtist = index => ({
  type: ActionTypes.REMOVE_ARTIST,
  index,
});

// export const editArtist = (artist) => {
//   return {
//     type: ActionTypes.EDIT_ARTIST,
//     payload: artist,
//   };
// };

export const updateArtistRating = (index, rating) => ({
  type: ActionTypes.UPDATE_ARTIST_RATING,
  index,
  rating,
});

export const selectArtist = index => ({
  type: ActionTypes.SELECT_ARTIST,
  index,
});

export function goArtistPage(id) {
  return {
    type: ActionTypes.GO_TO_ARTIST,
    id,
  };
}

export function updateArtist(id, name, picture, updated) {
  return {
    type: ActionTypes.UPDATE_ARTIST,
    id,
    name,
    picture,
    updated,

  };
}
