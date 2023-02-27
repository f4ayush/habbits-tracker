import { FETCH_ALL, CREATE, UPDATE_STATUS } from '../constants/actionTypes';

export default (albums = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [action.payload, ...albums];
    case UPDATE_STATUS:
      return [...action.payload];
    default:
      return albums;
  }
};