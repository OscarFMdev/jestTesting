
const reverseString = (string) => {
  const stringLength = string.length;
  let index = stringLength - 1;
  let reversedArray = [];
  for (let i = 0; i < string.length; i += 1) {
    reversedArray.push(string[index]);
    index -= 1;
  }
  return reversedArray.join('');
}

module.exports = reverseString;