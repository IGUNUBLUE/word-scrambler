import axios from "axios";
import { GET_DATA, SET_SCORE } from "./types";

export function getData(number) {
  return async function (dispatch) {
    const res = await axios.get(
      `https://api.hatchways.io/assessment/sentences/${number}`
    );
    const api = res.data;
    dispatch({
      type: GET_DATA,
      payload: { text: api.data.sentence, number: number },
    });
  };
}

export function setScore(newNumber) {
  return function (dispatch) {
    dispatch({
      type: SET_SCORE,
      payload: newNumber,
    });
  };
}
