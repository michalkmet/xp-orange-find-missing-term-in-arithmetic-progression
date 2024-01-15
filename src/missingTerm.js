function missingTerm(list) {
  const lowest = list[0];
  const highest = list[2];
  const division = Math.round(list[2] / list.length);
  console.log('lowest: ', lowest);
  console.log('highest: ', highest);
  console.log('division: ', division);

  for (let i = 0; i < list.length; i++) {
    console.log('list: ', list[i]);
    console.log('list[i+1]: ', list[i + 1]);
    console.log(list[i] + division != list[i + 1]);
    if (list[i] + division != list[i + 1]) {
      return list[i] + division;
    }
  }
}

module.exports = missingTerm;
