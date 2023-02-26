import { CREATE, UPDATE_STATUS, FETCH_ALL, HABBIT_TRACK } from '../constants/actionTypes';

export const getHabbits = () => async (dispatch) => {
  try {
    let data  = localStorage.getItem("habbits");
    data = JSON.parse(data) || [];

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createHabbit = (newHabbit, habbits) => async (dispatch) => {
  try {
    let newHabbits = [newHabbit, ... habbits]
    newHabbits = JSON.stringify(newHabbits)
    localStorage.setItem("habbits", newHabbits)
    dispatch({ type: CREATE, payload: newHabbit });
  } catch (error) {
    console.log(error);
  }
};

export const updateHabbit = (habbit) => async (dispatch) => {
  try {
    

    dispatch({ type: UPDATE_STATUS, payload: {} });
  } catch (error) {
    console.log(error);
  }
};
