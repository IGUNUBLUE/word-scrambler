const makeArray = (sentence) => {
  if (!sentence) return [];
  // creating an arrangement of words with your space
  const arrayWords = sentence
    .split(" ")
    .map((word, i, array) => (i === array.length - 1 ? word : `${word} `));
  // creating an array with array of elements, each letter in an element within the array
  return arrayWords.map((word) => [...word]);
};

export default makeArray;
