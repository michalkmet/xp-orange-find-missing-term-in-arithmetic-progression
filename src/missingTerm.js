function missingTerm(list) {
  const lowest = list[0];
  const highest = list[2];
  const division = list[2] / list[0];
  console.log('lowest: ', lowest);
  console.log('highest: ', highest);
  console.log('division: ', division);

  for (let i = 0; i < list.length; i++) {
    console.log('list: ', list[i]);
    console.log('list[i+1]: ', list[i + 1]);
    console.log(list[i] + division != list[i + 1]);
    if (list[i] + division != list[i + 1]) {
      return list[i + 1];
    }
  }

  // if (list.toString() === '1,5,7') {
  //   return 3;
  // } else if (list.toString() === '1,4,10') {
  //   return 7;
  // }
  // return 2;
}

module.exports = missingTerm;
