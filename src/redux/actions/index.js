import axios from "axios";
import { GET_DATA } from "./types";

export function getData(counter) {
  return async function (dispatch) {
    const response = await axios.get(
      `https://api.hatchways.io/assessment/sentences/${counter}`
    );
    const moreTags = await response.data.students.map((item) => {
      return {
        city: item.city,
        company: item.company,
        email: item.email,
        firstName: item.firstName,
        grades: item.grades,
        id: item.id,
        lastName: item.lastName,
        pic: item.pic,
        skill: item.skill,
        tags: [],
      };
    });
    dispatch({ type: GET_DATA, payload: moreTags });
  };
}
