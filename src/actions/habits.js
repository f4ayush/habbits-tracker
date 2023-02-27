import { CREATE, UPDATE_STATUS, FETCH_ALL, HABBIT_TRACK } from '../constants/actionTypes';

export const getHabits = () => async (dispatch) => {
  try {
    let data  = localStorage.getItem("habits");
    data = JSON.parse(data) || [];
    
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createHabit = (newHabit, habits) => async (dispatch) => {
  try {
    let newHabits = [newHabit, ... habits]
    newHabits = JSON.stringify(newHabits)
    localStorage.setItem("habits", newHabits)
    dispatch({ type: CREATE, payload: newHabit });
  } catch (error) {
    console.log(error);
  }
};

export const updateHabit = (habits) => async (dispatch) => {
  try {
    let newHabits = habits.map(habit=>{
      return habit;
    })
    localStorage.setItem('habits', JSON.stringify(newHabits));
    dispatch({ type: UPDATE_STATUS, payload: newHabits });
  } catch (error) {
    console.log(error);
  }
};
