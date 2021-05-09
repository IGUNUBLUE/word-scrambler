import axios from "axios";

async function getData(counter) {
  const res = await axios
    .get(`https://api.hatchways.io/assessment/sentences/${counter}`);
  const data = res.data;
  return data.data.sentence;
}

export default getData;
