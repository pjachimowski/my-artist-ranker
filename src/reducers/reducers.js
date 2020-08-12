import * as PlayerActionTypes from '../actiontypes/players';
import { v4 as uuid } from 'uuid';

const initialState = {
  artists: [
    {
      id: uuid(),
      name: 'Giolì & Assia',
      rating: 5,
      created: '11/8/2016',
      updated: '11/9/2016',
      picture: 'https://i.ibb.co/xLvHHCZ/TEy-FOecd-400x400.jpg',
    },
    {
      id: uuid(),
      name: 'Mumford & Sons',
      rating: 4,
      created: '11/8/2016',
      updated: '11/9/2016',
      picture: 'https://i.ibb.co/sJyfzd8/Mumford-Sons-Delta.png',
    },
    {
      id: uuid(),
      name: 'Shallou',
      rating: 3,
      created: '11/8/2016',
      updated: '11/9/2016',
      picture: 'https://i.ibb.co/GM6cRT2/7f0f3e0101b6f051fbbc005fd68acd48389e9d9a.jpg',
    },
  ],
  selectedPlayerIndex: -1,
};

export default function Reducers(state = initialState, action) {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER: {
      //{...} take existing items and incl. them in new object without mutating it
      // create object with name taken from the action and score 0
      const addPlayerList = [
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
        artists: addPlayerList,
      };
    }

    case PlayerActionTypes.REMOVE_PLAYER: {
      //{...} to cancatinate existing arrays
      // index is taken from the action
      //extract objects from arr, take all the object exept of the one we want to remove,
      // combain the results to a new arr
      const removePlayerList = [
        ...state.artists.slice(0, action.index),
        ...state.artists.slice(action.index + 1),
      ];
      return {
        ...state,
        artists: removePlayerList,
      };
    }

    case PlayerActionTypes.UPDATE_PLAYER_SCORE: {
      // use index to map/produce new array where,
      // the only thing we change is the score of the player
      // whos index we have
      const updatePlayerList = state.artists.map((artist, index) => {
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
        artists: updatePlayerList,
      };
    }

    // case PlayerActionTypes.SELECT_PLAYER:
    //   return {
    //     ...state,
    //     selectedPlayerIndex: action.index,
    //   };

    default:
      return state;
  }
}
