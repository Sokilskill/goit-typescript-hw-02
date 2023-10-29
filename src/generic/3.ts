/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const obj3 = {
  a: 1,
  c: 44,
  b: 33,
};
const obj4 = { b: "two", r: 53 };

const mergedObj = merge(obj3, obj4);
console.log(mergedObj);
