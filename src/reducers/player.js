import * as PlayerActionTypes from '../actiontypes/players';

const initialState = [
  {
    name: 'Jim Hoskins',
    score: 31,
  },
  {
    name: 'Andrew Chalkley',
    score: 20,
  },
  {
    name: 'Alena Holligan',
    score: 50,
  },
];

export default function Player(state = initialState, action) {
  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      return [
        ...state, //{...} take existing items and incl. them in new object without mutating it
        {
          name: action.name, // create object with name taken from the action and score 0
          score: 0,
        },
      ];
    case PlayerActionTypes.REMOVE_PLAYER:
      return [
        ...state.slice(0, action.index), //{...} to cancatinate existing arrays
        ...state.slice(action.index + 1), // index is taken from the action
        //extract objects from arr, take all the object exept of the one we want to remove,
        // combain the results to a new arr
      ];
    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      return state.map((player, index) => {
        // use index to map/produce new array where,
        // the only thing we change is the score of the player
        // whos index we have
        if (index === action.index) {
          return {
            ...player,
            score: player.score + action.score,
          };
        }
        return player;
      });
    default:
      return state;
  }
}
