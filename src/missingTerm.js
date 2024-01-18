function missingTerm(list) {
  list.sort((a, b) => a - b);
  console.log('list sorted:', list);
  const highest = list[list.length - 1] > 0 ? Math.abs(list[list.length - 1]) : Math.abs(list[0]);
  const division = getDivison(list, highest);
  console.log('highets: ', highest);
  console.log('division: ', division);
  for (let i = 0; i < list.length; i++) {
    if (list[i] + division != list[i + 1]) {
      return list[i] + division;
    }
  }
}

function getDivison(list) {
  const sum = list[0] < 0 ? Math.abs(list[0]) + list[list.length - 1] : list[list.length - 1];
  return Math.floor(sum / list.length) > 0 ? Math.floor(sum / list.length) : 1;
}

module.exports = missingTerm;
