const Calculator = require('../calculator');

describe('Add tests', () => {
  test('3 + 3 should be 6', () => {
    // Arrange
    const a = 3;
    const b = 3;

    // Act
    const result1 = Calculator.add(a, b);

    expect(result1).toEqual(6);
  });
  test('1.5 + 1.5 should be 3', () => {
    // Arrange
    const a = 1.5;
    const b = 1.5;

    // Act
    const result1 = Calculator.add(a, b);

    expect(result1).toEqual(3);
  });
  test('10 + 10 should be 20', () => {
    // Arrange
    const a = 10;
    const b = 10;

    // Act
    const result1 = Calculator.add(a, b);

    expect(result1).toEqual(20);
  });
});

describe('Subtract tests', () => {
  test('10 - 3 should be 7', () => {
    // Arrange
    const a = 10;
    const b = 3;

    // Act
    const result1 = Calculator.subtract(a, b);

    expect(result1).toEqual(7);
  });
  test('20 - 1.5 should be 18.5', () => {
    // Arrange
    const a = 20;
    const b = 1.5;

    // Act
    const result1 = Calculator.subtract(a, b);

    expect(result1).toEqual(18.5);
  });
  test('10 - 10 should be 0', () => {
    // Arrange
    const a = 10;
    const b = 10;

    // Act
    const result1 = Calculator.subtract(a, b);

    expect(result1).toEqual(0);
  });
});

describe('Divide tests', () => {
  test('10 / 2 should be 5', () => {
    // Arrange
    const a = 10;
    const b = 2;

    // Act
    const result1 = Calculator.divide(a, b);

    expect(result1).toEqual(5);
  });
  test('20 / 10 should be 2', () => {
    // Arrange
    const a = 20;
    const b = 10;

    // Act
    const result1 = Calculator.divide(a, b);

    expect(result1).toEqual(2);
  });
  test('10 / 10 should be 1', () => {
    // Arrange
    const a = 10;
    const b = 10;

    // Act
    const result1 = Calculator.divide(a, b);

    expect(result1).toEqual(1);
  });
});
