import sortObject from '../app';

test.each([
  {
    data: [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
    expected: [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ],
  },
])('sort object %s', ({ data, expected }) => {
  expect(sortObject(data)).toEqual(expected);
});
