import orderByProps from '../app';

test('orderByProps', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const arrSort = ['name', 'level'];
  expect(orderByProps(obj, arrSort)).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});
