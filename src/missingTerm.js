function missingTerm(list) {
  list.sort((a, b) => a - b);
  const highest = getHighestNum(list);
  const division = getDivision(list, highest);
  for (let i = 0; i < list.length; i++) {
    if (list[i] + division != list[i + 1]) {
      return list[i] + division;
    }
  }
}

function getHighestNum(list) {
  return list[list.length - 1] > 0 ? Math.abs(list[list.length - 1]) : Math.abs(list[0]);
}

function getDivision(list) {
  return Math.floor((list[list.length - 1] - list[0]) / list.length);
}

module.exports = missingTerm;
