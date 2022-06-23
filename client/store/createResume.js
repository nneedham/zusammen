import axios from 'axios';
export const CREATE_RESUME = 'CREATE_RESUME'

//action creator
const _createResume = resume => {
  return {
    type: CREATE_RESUME,
    resume
  }
}

//thunk creator
export const createResume = (resume) => {
  return async (dispatch) => {
    const {data: created} = await axios.post('/api/resumes', resume);
    dispatch(_createResume(resume))
  }
}

//reducer
export default function createResumeReducer (state=[], action) {
  switch (action.type) {
    case CREATE_RESUME:
      return [...state, action.resume]
    default:
      return state;
  }
}
