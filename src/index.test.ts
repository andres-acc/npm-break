import { numbersInformation } from '.';

test('should return correct operations', () => {
  expect(numbersInformation([1,2,3])).toEqual({
    avg: 2,
    sum: 6,
    max: 3,
    min: 1
  })
});

test('should return null on empty array', () => {
  expect(numbersInformation([])).toBe(null);
});
