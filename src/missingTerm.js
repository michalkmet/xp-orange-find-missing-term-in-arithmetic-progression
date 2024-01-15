function missingTerm(list) {
  const highest = list[list.length - 1];
  const division = Math.floor(highest / list.length);
  for (let i = 0; i < list.length; i++) {
    if (list[i] + division != list[i + 1]) {
      return list[i] + division;
    }
  }
}

module.exports = missingTerm;
