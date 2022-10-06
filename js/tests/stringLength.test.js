const stringLength = require('../stringLength');

test('"Hello" sting should have a length of 5', () => {
  expect(stringLength("hello")).toBe(5);
});

test('Empty argument should return false', () => {
  expect(stringLength("")).toBe(false);
})
