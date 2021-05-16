const handleNextInput = (i, j, text, refs) => {
  // Last letter of the sentence, true: to show the next button
  if (!text[i][j + 1] && !text[i + 1]) return true;
  // next row (word)
  else if (!text[i][j + 1]) setTimeout(() => refs[i + 1][0].current.focus(), 0);
  // next column (letter)
  else setTimeout(() => refs[i][j + 1].current.focus(), 0);
};

export default handleNextInput;
