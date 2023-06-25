const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};
const arrSort = ['name', 'level'];

export default function orderByProps(arr, sort) {
  const arrValue = [];
  const arrResult = [];
  // eslint-disable-next-line guard-for-in
  for (const key in arr) {
    arrValue.push({ key, value: arr[key] });
  }
  sort.forEach((element) => {
    arrValue.forEach((item, ind) => {
      if (item.key === element) {
        arrResult.push(item);
        arrValue.splice(ind, 1);
      }
    });
  });
  // eslint-disable-next-line no-nested-ternary
  arrValue.sort((a, b) => (a.key < b.key ? -1 : a.key > b.key ? 1 : 0));
  return arrResult.concat(arrValue);
}
orderByProps(obj, arrSort);
