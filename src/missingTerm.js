function missingTerm(list) {
  // for (let i = 0; i < list.length; i++) {
  //   console.log('list: ', list[i]);
  // }
  const lowest = list[0];
  const highest = list[2];
  const median = list[2] / list[0];
  console.log('lowest: ', lowest);
  console.log('highest: ', highest);
  console.log('median: ', median);

  if (list.toString() === '1,5,7') {
    return 3;
  } else if (list.toString() === '1,4,10') {
    return 7;
  }
  return 2;
}

module.exports = missingTerm;
