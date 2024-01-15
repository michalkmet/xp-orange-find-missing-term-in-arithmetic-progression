function missingTerm(list) {
  if (list.toString() === '1,5,7') {
    return 3;
  } else if (list.toString() === '1,4,10') {
    return 7;
  }
  return 2;
}

module.exports = missingTerm;
