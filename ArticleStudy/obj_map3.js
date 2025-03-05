//입력한 순서 유지
let obj = { b: 2, a: 1, c: 3 };
console.log(Object.keys(obj)); // ['b', 'a', 'c'] (순서가 유지될 수도, 아닐 수도 있음)

let map = new Map();
map.set("b", 2);
map.set("a", 1);
map.set("c", 3);

console.log([...map.keys()]); // ['b', 'a', 'c'] (항상 입력 순서 유지)
