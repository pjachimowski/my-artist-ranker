import { v4 as uuid } from 'uuid';
import * as ActionTypes from '../actiontypes/artist';
// import { combineReducers } from 'redux';

const initialState = {
  artists: [
    {
      id: uuid(),
      name: 'Giolì & Assia',
      rating: 5,
      created: '14/8/2020',
      updated: '14/8/2020',
      picture: 'https://i.ibb.co/xLvHHCZ/TEy-FOecd-400x400.jpg',
    },
    {
      id: uuid(),
      name: 'Mumford & Sons',
      rating: 4,
      created: '13/8/2020',
      updated: '14/8/2020',
      picture: 'https://i.ibb.co/sJyfzd8/Mumford-Sons-Delta.png',
    },
    {
      id: uuid(),
      name: 'Shallou',
      rating: 3,
      created: '12/8/2020',
      updated: '14/8/2020',
      picture:
        'https://i.ibb.co/GM6cRT2/7f0f3e0101b6f051fbbc005fd68acd48389e9d9a.jpg',
    },
  ],
};

function Reducers(state = initialState, action) {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  switch (action.type) {
    case ActionTypes.ADD_ARTIST: {
      // {...} take existing items and incl. them in new object without mutating it
      // create object with name taken from the action and score 0
      const addArtistList = [
        ...state.artists,
        {
          id: uuid(),
          name: action.name,
          rating: 0,
          updated: 'no updates yet',
          created: `${month}/${day}/${year}`,
          picture: action.picture,
        },
      ];
      return {
        ...state,
        artists: addArtistList,
      };
    }

    // case ActionTypes.EDIT_ARTIST:
    //   const updateArtist = action.payload;
    //   const updateArtists = state.artists.map((artist) => {
    //     if (artist.id === updateArtist.id) {
    //       return updateArtist;
    //     }
    //     return artist;
    //   });

    case ActionTypes.REMOVE_ARTIST: {
      // {...} to cancatinate existing arrays
      // index is taken from the action
      // extract objects from arr, take all the object exept of the one we want to remove,
      // combain the results to a new arr
      const removeArtistList = [
        ...state.artists.slice(0, action.index),
        ...state.artists.slice(action.index + 1),
      ];
      return {
        ...state,
        artists: removeArtistList,
      };
    }

    case ActionTypes.UPDATE_ARTIST_RATING: {
      // use index to map/produce new array where,
      // the only thing we change is the score of the Artist
      // whos index we have
      const updateArtistList = state.artists.map((artist, index) => {
        if (index === action.index) {
          return {
            ...artist,
            rating: artist.rating + action.rating,
            updated: `${month}/${day}/${year}`,
          };
        }
        return artist;
      });
      return {
        ...state,
        artists: updateArtistList,
      };
    }

    case ActionTypes.UPDATE_ARTIST: {
      const updateArtistListtt = state.artists.map(artist => {
        if (artist.id === action.id) {
          return {
            ...artist,
            name: action.name,
            picture: action.picture,
            updated: `${month}/${day}/${year}`,
          };
        }
        return artist;
      });
      return {
        ...state,
        artists: updateArtistListtt,
      };
    }

    case ActionTypes.GO_TO_ARTIST:
      return action.id;
    default:
      return state;
  }
}

export default Reducers;
