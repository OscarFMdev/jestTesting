const stringLength = (string) => {
  if (string.length === 0 || string.length > 10) {
    return false;
  }
  return string.length;
}


module.exports = stringLength;