const capitalizeText = require("../capitalize");

describe('Capitalize function', () => {
  test('Should return capitalized string', () => {
    // Arrange
    const string = "hello";
    // Act
    const result = capitalizeText(string);
    //Assert
    expect(result).toBe('Hello');
  });
});