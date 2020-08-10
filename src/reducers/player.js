import * as PlayerActionTypes from '../actiontypes/players';

const initialState = {
  players: [
    {
      name: 'Jim Hoskins',
      score: 31,
      created: '11/8/2016',
      updated: '11/9/2016',
    },
    {
      name: 'Andrew Chalkley',
      score: 20,
      created: '11/8/2016',
      updated: '11/9/2016',
    },
    {
      name: 'Alena Holligan',
      score: 50,
      created: '11/8/2016',
      updated: '11/9/2016',
    },
  ],
  selectedPlayerIndex: -1,
};

export default function Player(state = initialState, action) {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER: {
      //{...} take existing items and incl. them in new object without mutating it
      // create object with name taken from the action and score 0
      const addPlayerList = [
        ...state.players,
        {
          name: action.name,
          score: 0,
          created: `${month}/${day}/${year}`,
        },
      ];
      return {
        ...state,
        players: addPlayerList,
      };
    }

    case PlayerActionTypes.REMOVE_PLAYER: {
      //{...} to cancatinate existing arrays
      // index is taken from the action
      //extract objects from arr, take all the object exept of the one we want to remove,
      // combain the results to a new arr
      const removePlayerList = [
        ...state.players.slice(0, action.index),
        ...state.players.slice(action.index + 1),
      ];
      return {
        ...state,
        players: removePlayerList,
      };
    }

    case PlayerActionTypes.UPDATE_PLAYER_SCORE: {
      // use index to map/produce new array where,
      // the only thing we change is the score of the player
      // whos index we have
      const updatePlayerList = state.players.map((player, index) => {
        if (index === action.index) {
          return {
            ...player,
            score: player.score + action.score,
            updated: `${month}/${day}/${year}`,
          };
        }
        return player;
      });
      return {
        ...state,
        players: updatePlayerList,
      };
    }

    case PlayerActionTypes.SELECT_PLAYER:
      return {
        ...state,
        selectedPlayerIndex: action.index,
      };

    default:
      return state;
  }
}
