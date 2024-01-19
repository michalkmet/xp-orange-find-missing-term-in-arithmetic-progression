function missingTerm(list) {
  list.sort((a, b) => a - b);
  const division = getDivision(list);
  for (let i = 0; i < list.length; i++) {
    if (list[i] + division != list[i + 1]) {
      return list[i] + division;
    }
  }
}

function getDivision(list) {
  return Math.floor((list[list.length - 1] - list[0]) / list.length);
}

module.exports = missingTerm;
