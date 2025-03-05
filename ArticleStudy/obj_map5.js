//크기 확인 할 때
let obj = { name: "철수", age: 10 };
console.log(Object.keys(obj).length); // 2

let map = new Map();
map.set("name", "철수");
map.set("age", 10);
console.log(map.size); // 2

//키 존재 여부
// 🔹 Object는 "key" in obj 또는 hasOwnProperty() 사용
// 🔹 Map은 .has() 메서드 사용

let obj2 = { name: "철수" };
console.log("name" in obj); // true
console.log(obj.hasOwnProperty("name")); // true

let map2 = new Map();
map.set("name", "철수");
console.log(map.has("name")); // true
