import axios from 'axios';
export const FETCH_USERSCORES = 'FETCH_USERSCORES';

//action creator
const _fetchUserScores = userScores => {
  return {
    type: FETCH_USERSCORES,
    userScores
  }
}

//thunk creator
export const fetchUserScores = (id) => {
  return async (dispatch) => {
    const {data: userScores} = await axios.get(`/api/userscores/${id}`);
    dispatch(_fetchUserScores(userScores))
  }
}

//reducer
export default function fetchUserScoresReducer (state=[], action) {
  switch (action.type) {
    case FETCH_USERSCORES:
      return [...state, action.userScores]
    default:
      return state;
  }
}
