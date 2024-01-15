function missingTerm(list) {
  const highest = list[list.length - 1];
  const division = Math.floor(highest / list.length);
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
